const env = 'development'
const config = require("./knexfile.js")[env];
const knex = require('knex')(config);

knex.insert({first_name: process.argv.slice(2)[0], last_name: process.argv.slice(2)[1], birthdate: process.argv.slice(2)[2]})
.into("famous_people")
.asCallback(function(err, rows) {
    if (err) return console.error(err);
    console.log(rows);
    knex.destroy()
});
// .where('first_name', process.argv.slice(2)[0])
// .andWhere('last_name', process.argv.slice(2)[1])
// .andWhere('date_of_birth', process.argv.slice(2)[2])