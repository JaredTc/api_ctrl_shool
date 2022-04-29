var mysql = require('mysql');
const cn = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'usersex'
    
}


const pool = mysql.createPool(cn);

module.exports = pool;
