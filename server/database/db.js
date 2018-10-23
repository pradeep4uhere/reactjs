var mysql = require('mysql')
var config;
config = {
connection : mysql.createPool({
     connectionLimit : 100, //important
     host     : 'localhost',
     user     : 'root',
     password : 'admin@1234',
     database : 'react_db',
     debug    :  false
 })
}
module.exports = config;

