const knex = require("./knexfile");

knex('famous_people').insert('first_name', 'last_name', 'date_of_birth')
.where('first_name', process.argv.slice(2)[0])
.andWhere('last_name', process.argv.slice(2)[1])
.andWhere('date_of_birth'. INTEGER)
.select('id')