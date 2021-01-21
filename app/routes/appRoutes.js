'use strict';
module.exports = function(app) {
    var Jackpotlist = require('../controllers/appController');

    app.route('/getjackpot/:idapi')
        .get(Jackpotlist.get_Jackpotdata);
    app.route('/getjackpotrealtime/:idapi')
        .get(Jackpotlist.get_Jackpotdatarealtime);
    app.route('/getcurrentuid/:uid')
        .get(Jackpotlist.get_currentrealtime);
    app.route('/getlotterysetting/:typeid')
        .get(Jackpotlist.get_currentettingByTypeID);
    app.route('/checknumberList/:roomid')
        .get(Jackpotlist.check_numberList);
    app.route('/checkpoylist')
        .post(Jackpotlist.get_checkpoylist);
    app.route('/checkpromocode')
        .post(Jackpotlist.get_checkpromocode);
    app.route('/addbuylist')
        .post(Jackpotlist.add_buylist);
    app.route('/newuser')
        .post(Jackpotlist.new_user);
    app.route('/checkroomstatus/:roomid')
        .get(Jackpotlist.get_roomstatusByroomID);
    app.route('/checkroomtype/:typeid')
        .get(Jackpotlist.get_checkroomtypestatus);
    app.route('/checkallroom')
        .get(Jackpotlist.get_checkallroom);
    app.route('/testing')
        .get(Jackpotlist.test_getlist);
};