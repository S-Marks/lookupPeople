// Update with your config settings.
const settings = require("../settings");

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://development:development@localhost:5432/test_db'
    //   user: settings.user,
    //   password: settings.password,
    //   database: settings.database,
    //   host: settings.hostname,
    //   port: settings.port,
    //   ssl: settings.ssl
    // }
  }
};