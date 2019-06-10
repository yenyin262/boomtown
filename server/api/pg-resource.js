function tagsQueryString(tags, itemid, result) {
  const length = tags.length;
  return length === 0
    ? `${result};`
    : tags.shift() &&
        tagsQueryString(
          tags,
          itemid,
          `${result}($${tags.length + 1}, ${itemid})${length === 1 ? '' : ','}`
        );
}

module.exports = postgres => {
  return {
    async createUser({ fullname, email, password }) {
      const newUserInsert = {
        text:
          'INSERT INTO users (fullname, email, password) VALUES ($1, $2, $3) RETURNING *',

        values: [fullname, email, password]
      };
      try {
        const user = await postgres.query(newUserInsert);
        return user.rows[0];
      } catch (e) {
        console.log(e.message);
        switch (true) {
          case /users_fullname_key/.test(e.message):
            throw 'An account with this username already exists.';
          case /users_email_key/.test(e.message):
            throw 'An account with this email already exists.';
          default:
            throw 'There was a problem creating your account.';
        }
      }
    },
    async getUserAndPasswordForVerification(email) {
      const findUserQuery = {
        text: 'SELECT * FROM users WHERE email = $1',
        values: [email]
      };
      try {
        const user = await postgres.query(findUserQuery);
        if (!user) throw 'User was not found.';
        return user.rows[0];
      } catch (e) {
        throw 'User was not found.';
      }
    },
    async getUserById(id) {
      const findUserQuery = {
        text: 'SELECT * FROM users WHERE id = $1',
        values: id ? [id] : []
      };
      try {
        const user = await postgres.query(findUserQuery);
        return user.rows[0];
      } catch (e) {
        throw 'User ID not found';
      }
    },

    async getItems(idToOmit) {
      const items = await postgres.query({
        text: `SELECT * FROM items ${idToOmit ? `WHERE itemowner != $1` : ``}`,
        values: idToOmit ? [idToOmit] : []
      });
      return items.rows;
    },

    async getItemsForUser(id) {
      const items = await postgres.query({
        text: `SELECT * FROM items WHERE itemowner = $1`,
        values: [id]
      });
      return items.rows;
    },

    async getBorrowedItemsForUser(id) {
      const items = await postgres.query({
        text: `SELECT * FROM items WHERE borrower = $1`,
        values: [id]
      });
      return items.rows;
    },

    async getTags() {
      try {
        const tags = await postgres.query('SELECT * FROM tags');
        return tags.rows;
      } catch (e) {
        throw 'Tags Not Found.';
      }
    },

    async getTagsForItem(id) {
      const tagsQuery = {
        text: `SELECT * FROM tags INNER JOIN itemtags ON tags.id = itemtags.tagid WHERE itemtags.itemid = $1`,
        values: [id]
      };
      const tags = await postgres.query(tagsQuery);
      return tags.rows;
    },

    async saveNewItem({ item, user }) {
      return new Promise((resolve, reject) => {
        postgres.connect((err, client, done) => {
          try {
            client.query('BEGIN', async err => {
              const { title, description, tags } = item;

              client.query('SELECT * FROM items');

              const itemQuery = {
                text:
                  'INSERT INTO items (title,  description, itemowner ) VALUES ($1, $2, $3) RETURNING *',
                values: [title, description, user.id]
              };

              const newItem = await postgres.query(itemQuery);

              if (tags && tags.length) {
                const insertTags = {
                  text: `INSERT INTO itemtags (tagid ,itemid ) VALUES ${tags
                    .map((tag, idx) => {
                      return `($${idx + 1}, ${newItem.rows[0].id})`;
                    })
                    .join(',')}`,

                  values: tags.map(tag => tag.id)
                };
                console.log({ insertTags });

                await postgres.query(insertTags);
              }
              client.query('COMMIT', err => {
                if (err) {
                  throw err;
                }

                done();
                resolve(newItem.rows[0]);
              });
            });
          } catch (e) {
            client.query('ROLLBACK', err => {
              if (err) {
                throw err;
              }
              done();
            });
            switch (true) {
              default:
                throw e;
            }
          }
        });
      });
    }
  };
};
