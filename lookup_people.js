const db = require('./db');

const queryType = process.argv.slice(2)[0]

switch (queryType) {

    case 'readFN':
        console.log('Searching...');
        first_name = process.argv.slice(2)[1];
        db.query('SELECT * FROM famous_people WHERE first_name = $1', [first_name], (err, res) => {
            if (err) throw err;
            console.log(res.rows);
            db.end();
        });
        break;

    case 'readLN':
        console.log('Searching...');
        last_name = process.argv.slice(2)[1];
        db.query('SELECT * FROM famous_people WHERE last_name = $1', [last_name], (err, res) => {
            if (err) throw err;
            console.log(res.rows);
            db.end();
        });
        break;

    default:
        db.end();
        break;
}