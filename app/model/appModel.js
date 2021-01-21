'user strict';
var sql = require('./sql_connect.js');
var functionque = require('./functionque');
//Task object constructor
var Jackpotlist = function(jackpotdate) {
    this.jackpotdate = jackpotdate.jackpotdate;
};

Jackpotlist.GetjackpotBydate = function GetjackpotBydate(DateT, result) {
    sql.query("select * from tblJackpot where idapi =? ", DateT, function(err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            result(null, res);
        }
    });
};

Jackpotlist.getcurrentrealtimeByUID = function getcurrentrealtimeByUID(uid, result) {
    sql.query("select * from tblUser as a left join tblMember as b on a.uid=b.uid where a.uid =? ", uid, function(err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            result(null, res);
        }
    });
};

Jackpotlist.checknumberList = function checknumberList(roomid, result) {
    sql.query("SELECT * FROM `tbllocknumber`  where roomid =? ", roomid, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            result(null, res);
        }
    });
};

Jackpotlist.getcheckpoylist = function getcheckpoylist(track,uid, result) {
    sql.query("SELECT * FROM `tblbuylist` as a left join `tblpoy` as b on a.poyid =b.poyid WHERE b.track ='" + track + "' and a.uid ='" + uid +"'", function (err, res) {
        console.log("SELECT * FROM `tblbuylist` as a left join `tblpoy` as b on a.poyid =b.poyid WHERE b.track ='" + track + "' and a.uid ='" + uid + "'");
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            console.log(res);
            result(null, res);
        }
    });
};

Jackpotlist.addbuylist = function addbuylist(roomid, uid, object, track, dateadd, priceset, result) {
    sql.query("select seedid from tblseed where nametbl ='tblpoy'", function (err, res) {
    var seedid = parseInt( res[0].seedid) + 1 ;
    var inserts = [];
    Object.keys(object).forEach(function (k) {     
        inserts.push([uid, roomid, seedid, object[k].value, object[k].price, 1, object[k].type, dateadd]);     
    }); 
    console.log(priceset);
    sql.query("UPDATE tblmember SET Point =" + priceset +" WHERE  uid='" + uid + "'", function (err, res) { }); 
    sql.query("UPDATE tblseed SET seedid =" + seedid + " WHERE  nametbl ='tblpoy';", function (err, res) { });   
        sql.query("INSERT INTO tblpoy (`uid`,`roomid`,`track`,`poyid`) VALUES ('" + uid + "','" + roomid + "','" + track + "','" + seedid +"');", function (err, res) { });       
    sql.query({ 
        sql: "INSERT INTO tblbuylist (uid,roomid,poyid,number, price,status,type, date) VALUES ?;", values: [inserts]},function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            var status = 'success';
            var objst = { status } 
            result(null, objst);
        }
         
        });
    });
};

Jackpotlist.newuser = function newuser(uid, object, result) {
    var inserts = [];
        inserts.push([uid, 0]);
    var insert = [];
        insert.push([uid, 0, 0]);
sql.query({ sql: 'INSERT INTO tblmember (uid,Point) VALUES ?', values: [inserts],
            sql: 'INSERT INTO tbluser (UID,Username,Type) VALUES ?', values: [insert] }, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            var status = 'success';
            var objst = { status }
            result(null, objst);
        }
    });


};

Jackpotlist.getroomstatusByroomID = function getroomstatusByroomID(roomid, result) {
    sql.query("select * from tblroomid  where roomid =? ", roomid, function (err, res) {
        if (err) {
            console.log("error: ", err);
            var status = 'error';
            var objst = { status }
            result(null, objst);
        } else {
            if (res[0] !== undefined) {

            if (res[0].status ===  1)
            {
                var status = 'success';
                var dateOpen = res[0].datetimeOpen;
                var dateClose = res[0].datetimeClose;
                var roomtype = res[0].type;
                var roomtype = res[0].type.Name;
                var objst = { status, res}
                result(null, objst);
            }
            else {
                var status = 'close';
                var objst = { status }
                result(null, objst);
            }

           }
            else {
              var status = 'error';
              var objst = { status }
                result(null, objst);
            }
        
        }
    });
};

Jackpotlist.getcheckroomtype = function getcheckroomtype(roomid, result) {
    sql.query("select * from tblroomid  where status = 1 and type =? ", roomid, function (err, res) {
        if (err) {
            console.log("error: ", err);
            var status = 'close';
            var dateOpen = null;
            var dateClose = null;
            var roomid = null;
            var roomtype = null;
            var objst = { status, dateOpen, dateClose, roomid, roomtype}
            result(null, objst);
        } else {
            if (res[0] !== undefined) {

                if (res[0].status === 1) {
                    var status = 'success';
                    var dateOpen = res[0].datetimeOpen;
                    var dateClose = res[0].datetimeClose;
                    var roomid = res[0].roomid;
                    var roomtype = res[0].type;                    
                    var objst = { status, dateOpen, dateClose, roomid,roomtype}
                    result(null, objst);
                }
                else {
                    var status = 'close';
                    var dateOpen = null;
                    var dateClose = null;
                    var roomid = null;
                    var roomtype = res[0].type;
                    var objst = { status, dateOpen, dateClose, roomid, roomtype}
                    result(null, objst);
                }

            }
            else {
                var status = 'close';
                var dateOpen = null;
                var dateClose = null;
                var roomid = null;
                var roomtype = null;
                var objst = { status, dateOpen, dateClose, roomid, roomtype }
                result(null, objst);
            }

        }
    });
};

Jackpotlist.getcheckallroom = function getcheckallroom(roomid, result) {
    sql.query("select * from tblroomid  where status >= 1", roomid, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            result(null, res);
        }
    });
};

Jackpotlist.getcheckpromocodeByUID = function getcheckpromocodeByUID(promocode,uid, result) {
    sql.query("select * from tbkpromocode  where keycode =?  and status = 1", promocode, function (err, res) {
        if (err) {
            console.log("error: ", err);
            var sumpoint = 500;
            var status = 'error';
            var objst = { sumpoint, status }
            result(null, objst);
        } else {


            if (res[0] !== undefined)
            {
                sql.query("select * from tblMember where uid =? ", uid, function (err, memberlist){
                var member = memberlist[0].Point;
                var sumpoint = parseInt(res[0].price) + parseInt(member);
                var sqlstate = "UPDATE tblMember SET point = " + sumpoint + " WHERE uid = '" + uid + "' ;";
                   // sqlstate += "UPDATE tbkpromocode SET status = 2 WHERE keycode = '" + promocode + "'";
                sql.query(sqlstate, function (err, result) {
                    if (err) throw err;
                });
                //  var uid = obj.username;
                var sumpoint = res[0].price ;
                var status = 'success';
                var objst = { sumpoint, status }
                result(null, objst);
               
            });
          }
          else 
          {
                console.log("error: ", err);
                var sumpoint = 500;
                var status = 'error';
                var objst = { sumpoint, status }
                result(null, objst);
           }
  
        }
    });
};

Jackpotlist.getcurrentSettingByTypeID = function getcurrentSettingByTypeID(typeid, result) {
    sql.query("select * from tblthaiLotterysetting  where roomid =? ", typeid, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            result(null, res);
        }
    });
};

Jackpotlist.GetjackpotRealtimeBydate = function GetjackpotRealtimeBydate(DateT, result) {
    sql.query("select * from tblThaiLottery where idapi =? ", DateT, function(err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            result(null, res);
        }
    });
};

module.exports = Jackpotlist;