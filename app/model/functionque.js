'user strict';
var sql = require('./sql_connect.js');

//Task object constructor
var functionque = function (functionque) {
};



var getmember = function getmember(uid, result) {
    sql.query("select * from tblmember where uid =? ", uid, function (err, res) {
        if (err) {
            result(err, null);
        } else {
            result(null, res);
        }
    });
};