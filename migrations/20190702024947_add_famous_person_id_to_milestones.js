
exports.up = function(knex, Promise) {
    return ([
        knex.schema.table('milestones', function (table) {
            table.bigInteger('famous_person_id').references('id').inTable('famous_people');
 
        })
    ])
 };
 
 exports.down = function (knex, Promise) {
    return ([
        knex.schema.dropTable('milestones')
    ])
 };
