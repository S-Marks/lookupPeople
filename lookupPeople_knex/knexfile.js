// Update with your config settings.
const settings = require("../settings");

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://development:development@localhost:5432/test_db'
  }
};