const pg = require("pg");
const settings = require("./settings"); // settings.json

const client = new pg.Client({
    user: settings.user,
    password: settings.password,
    database: settings.database,
    host: settings.hostname,
    port: settings.port,
    ssl: settings.ssl
});

const queryType = process.argv.slice(2)[0]
let id = null;

client.connect((err) => {
    if (err) {
        return console.error("Connection Error", err);
    }
    console.log('Connected to pg server');

    switch (queryType) {

        case 'readFN':
            first_name = process.argv.slice(2)[1];
            client.query('SELECT * FROM famous_people WHERE first_name = $1', [first_name], (err, res) => {
                if (err) throw err;
                console.log(res.rows);
                client.end();
            });
            break;

        case 'readLN':
            last_name = process.argv.slice(2)[1];
            client.query('SELECT * FROM famous_people WHERE last_name = $1', [last_name], (err, res) => {
                if (err) throw err;
                console.log(res.rows);
                client.end();
            });
            break;

        default:
            client.end();
            break;
    }
});