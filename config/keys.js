console.log('credentials loaded\n');

exports.mySQL = {
  host: process.env.MYSQL_HOST,
  Port: process.env.MYSQL_PORT,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE
};