const express = require('express');
const { Client } = require('pg');
const connectionString = 'postgres://victor:30165601@127.0.0.1:5432/xbot';
const client = new Client({
    connectionString: connectionString
});

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

app.listen(4000, function () {
    console.log('|======= SERVIDOR === X-BOT =======|');
    console.log('|* O banco conectou na porta 4000 *|');
    console.log('|==================================|');
});