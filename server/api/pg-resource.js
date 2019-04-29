function tagsQueryString(tags, itemid, result) {
  /**
   * Challenge:
   * This function is more than a little complicated.
   *  - Can you refactor it to be simpler / more readable?
   *  - Is this
   */
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
      const newUserInsert = { // inserting user into our database
        text: 'INSERT INTO users (fullname, email, password) VALUES ($1, $2, $3) RETURNING *',
         // @TODO: Authentication - Server
        values: [fullname, email, password]
      };
      try {
        const user = await postgres.query(newUserInsert);
        return user.rows[0];
      } catch (e) {
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
        text: 'SELECT * FROM users WHERE email = $1', // @TODO: Authentication - Server
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
    async getUserById(id) { // this is the borrower & itemowner in the user / associating borrower with id of user
      const findUserQuery = {
        text: 'SELECT id, email, fullname, bio FROM users WHERE id = $1', // @TODO: Basic queries
        values: [id] // id array so must destructure it 
      };
      try {
        const user = await postgres.query(findUserQuery);
        if (!user) throw 'User was not found.';
        return user.rows[0];
      } catch (e) {
        throw 'User was not found.';
      }
    },
    

    async getItems(idToOmit) {
      const items = {
        text: `SELECT * FROM items ${idToOmit ? `WHERE ownerid != $1` : ``}`,
        values: idToOmit ? [idToOmit] : []
      };
      try {
        const retrieveItems = await postgres.query(items);
        if (!retrieveItems) throw 'Item was not found.';
        return items.rows;
      } catch (e) {
        throw 'Item was not found.';
      }
    },

    
    async getItemsForUser(id) {
      const items = {
        text: `SELECT * FROM items LEFT JOIN users ON items.id = users.id`,
        values: [id]
      };
      try{
      const retrieveItemsForUser = await postgres.query(items);
      if(!retrieveItemsForUser) throw 'Items For User Not Found.';
      return items.rows;
      } catch(e) { 
      throw 'Items For User Not Found.'}
    },
   
    async getBorrowedItemsForUser(id) { // change to  id 
      const items = {
           text:`SELECT * FROM items WHERE borrowerid = $1`,
        values: [id]
      };
      try{ 
      const retrieveBorrowedItemsForUser = await postgres.query(items);
      if(!retrieveBorrowedItemsForUser) throw 'Borrowed Items For User Not Found.';
      return items.rows;
      } catch (e) { 
      throw 'Borrowed Items For User Not Found.'
      }
    },
  

    
   async getTags() {
      try {
      const tags = await postgres.query('SELECT * FROM tags');
      return tags.rows;
    }
    catch(e){ 
      throw 'Tags Not Found.'
    }
    },

 

    async getTagsForItem(id) { // to join on the corresponding tags.id with itemtags.tagid and then get the corresponding item for tags  
      const tagsQuery = {
        text: `SELECT * FROM tags INNER JOIN itemtags ON tags.id = itemtags.tagid WHERE itemtags.items.id = $1`, // @TODO: Advanced queries
        values: [id]
      };
      try { 
      const retrieveTagsForItem = await postgres.query(tagsQuery);
      if(!retrieveTagsForItem) throw 'Tags for Item Not Found.'; 
      return tags.rows;
      }
      catch (e) { 
      throw 'Tags for Item Not Found.'}
    },
    async saveNewItem({ item, user }) {
      /**
       *  @TODO: Adding a New Item
       *
       *  Adding a new Item to Posgtres is the most advanced query.
       *  It requires 3 separate INSERT statements.
       *
       *  All of the INSERT statements must:
       *  1) Proceed in a specific order.
       *  2) Succeed for the new Item to be considered added
       *  3) If any of the INSERT queries fail, any successful INSERT
       *     queries should be 'rolled back' to avoid 'orphan' data in the database.
       *
       *  To achieve #3 we'll ue something called a Postgres Transaction!
       *  The code for the transaction has been provided for you, along with
       *  helpful comments to help you get started.
       *
       *  Read the method and the comments carefully before you begin.
       */

      return new Promise((resolve, reject) => {
        /**
         * Begin transaction by opening a long-lived connection
         * to a client from the client pool.
         * - Read about transactions here: https://node-postgres.com/features/transactions
         */
        postgres.connect((err, client, done) => {
          try {
            // Begin postgres transaction
            client.query('BEGIN', async err => {
              const { title, description, tags } = item;

              // Generate new Item query
              // @TODO
              // -------------------------------

              // Insert new Item
              // @TODO
              // -------------------------------

              // Generate tag relationships query (use the'tagsQueryString' helper function provided)
              // @TODO
              // -------------------------------

              // Insert tags
              // @TODO
              // -------------------------------

              // Commit the entire transaction!
              client.query('COMMIT', err => {
                if (err) {
                  throw err;
                }
                // release the client back to the pool
                done();
                // Uncomment this resolve statement when you're ready!
                // resolve(newItem.rows[0])
                // -------------------------------
              });
            });
          } catch (e) {
            // Something went wrong
            client.query('ROLLBACK', err => {
              if (err) {
                throw err;
              }
              // release the client back to the pool
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
