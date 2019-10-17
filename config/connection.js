var mysql = require("mysql");
// var credentials = require("./keys.js");
// var connection = mysql.createConnection(credentials.mySQL);
var connection

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: 'localhose',
        user: 'root',
        password: 'hacktheplanet',
        database: 'todoagain_db'
    });
}

connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;