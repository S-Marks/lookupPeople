const env = 'development'
const config = require("./knexfile.js")[env];
const knex = require('knex')(config);
const input = process.argv.slice(2)[0];

knex.select('*').from("famous_people")
.where('first_name', input)
.asCallback(function(err, rows) {
    if (err) return console.error(err);
    console.log(rows);
    knex.destroy()
})

knex.select('*').from("famous_people")
.where('last_name', input)
.asCallback(function(err, rows) {
    if (err) return console.error(err);
    console.log(rows);
    knex.destroy()
})