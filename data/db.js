var mysql = require('mysql');
const cn = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'inventary'
    
}


const pool = mysql.createPool(cn);

module.exports = pool;
