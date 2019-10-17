var credentials = require("./keys.js");
var connection = mysql.createConnection(credentials.mySQL);
var mysql = require("mysql");



connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;