const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'learning_mysql',
    password: '123456789'
});

module.exports = pool.promise();