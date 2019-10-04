const express = require('express');
const promise = require('bluebird');
const { Client } = require('pg');
const connectionString = 'postgres://victor:30165601@127.0.0.1:53333/xbot';
const client = new Client({
    connectionString: connectionString
});
const options = {
    promiseLib: promise
}
const pgp = require('pg-promise')(options);

client.connect();

var app = express();

app.set('port', process.env.PORT || 4000);
app.get('/', function (req, res, next) {
    client.query('SELECT * FROM ADM_PAPEL', function (err, result) {
        if (err) {
            console.log(err);
            res.status(400).send(err);
        }
        res.status(200).send(result.rows);
    });
});

const db = pgp (connectionString);

module.exports = {
    pgp: this.pgp,
    db: db
};

app.listen(4000, function () {
    console.log('|======= SERVIDOR === X-BOT =======|');
    console.log('|  O banco conectou na porta ' + client.port +' |');
    console.log('|==================================|');
    console.log('* Usuário: ' + client.connectionParameters.user);
    console.log('* Host: ' + client.connectionParameters.host);
    console.log('* Banco: ' + client.connectionParameters.database);
    console.log(client);
});