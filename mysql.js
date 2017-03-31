var wrapper = require('co-mysql');
var mysql = require('mysql');
var options = {
	host: 'localhost',
	user: 'ch51ff',
	password: 'fch147',
	database: 'my_test',
	port: 3306
}

var pool = mysql.createPool(options);
var p = wrapper(pool);

module.exports = p;