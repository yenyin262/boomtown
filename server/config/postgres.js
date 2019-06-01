const { Pool } = require('pg'); // bunch of tunnels to databse  - connection pool /

module.exports = app => {
  return new Pool({
    host: app.get('PG_HOST'),
    user: app.get('PG_USER'),
    password: app.get('PG_PASSWORD'),
    database: app.get('PG_DB'),
    idleTimeoutMillis: 30000, // 30secs
    connectionTimeoutMillis: 2000 // setting bounds
  });
};
