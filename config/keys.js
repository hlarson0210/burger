console.log('credentials loaded\n');

exports.mySQL = {
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  Port: process.env.MYSQL_PORT,
  database: process.env.MYSQL_DATABASE
};