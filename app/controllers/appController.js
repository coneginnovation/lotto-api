'use strict';

var Jackpotlist = require('../model/appModel.js');

exports.get_Jackpotdata = function(req, res) {
    try {
        Jackpotlist.GetjackpotBydate(req.params.idapi, function(err, Jackpotlist) {
            if (err) {
                res.send(err);
            } else {
                res.json(Jackpotlist);
            }
        });
    } catch (err) {
        return next(err);
    }
};
exports.get_currentrealtime = function (req, res) {
    try {
        Jackpotlist.getcurrentrealtimeByUID(req.params.uid, function (err, Jackpotlist) {
            if (err) {
                res.send(err);
            } else {
                res.json(Jackpotlist);
            }
        });
    } catch (err) {
        return next(err);
    }
};

exports.get_checkpromocode = function (req, res) {
    try {
        Jackpotlist.getcheckpromocodeByUID(req.body.promocode, req.body.uid, function (err, Jackpotlist) {
            if (err) {
                res.send(err);
            } else {
                res.json(Jackpotlist);
            }
        });
    } catch (err) {
        return next(err);
    }
};


exports.get_roomstatusByroomID = function (req, res) {
    try {
        Jackpotlist.getroomstatusByroomID(req.params.roomid, function (err, Jackpotlist) {
            if (err) {
                res.send(err);
            } else {
                res.json(Jackpotlist);
            }
        });
    } catch (err) {
        return next(err);
    }
};


exports.get_checkroomtypestatus = function (req, res) {
    try {
        Jackpotlist.getcheckroomtype(req.params.typeid, function (err, Jackpotlist) {
            if (err) {
                res.send(err);
            } else {
                res.json(Jackpotlist);
            }
        });
    } catch (err) {
        return next(err);
    }
};


exports.get_checkpoylist = function (req, res) {
    try {
        Jackpotlist.getcheckpoylist(req.body.track, req.body.uid, function (err, Jackpotlist) {
            if (err) {
                res.send(err);
            } else {
                res.json(Jackpotlist);
            }
        });
    } catch (err) {
        return next(err);
    }
};

exports.get_checkallroom = function (req, res) {
    try {
        Jackpotlist.getcheckallroom(req, function (err, Jackpotlist) {
            if (err) {
                res.send(err);
            } else {
                res.json(Jackpotlist);
            }
        });
    } catch (err) {
        return next(err);
    }
};




exports.new_user = function (req, res) {
    try {
        Jackpotlist.newuser(req.body.uid, req.body.uid, req.body.obj, req.body.obj.track, function (err, Jackpotlist) {
            if (err) {
                res.send(err);
            } else {
                res.json(Jackpotlist);
            }
        });
    } catch (err) {
        return next(err);
    }
};


exports.add_buylist = function (req, res) {
    try {
        Jackpotlist.addbuylist(req.body.roomid, req.body.uid, req.body.obj, req.body.track, req.body.dateadd, req.body.priceset, function (err, Jackpotlist) {
            if (err) {
                res.send(err);
            } else {
                res.json(Jackpotlist);
            }
        });
    } catch (err) {
        return next(err);
    }
};
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
const LineAPI = require('line-api');
const notify = new LineAPI.Notify({
    token: "W2XfmX6PiA4XwhzrPO3oeK2e4kwCFbm4mn6rLadzrQl"
})
exports.check_numberList = function (req, res) {
    try {
        Jackpotlist.checknumberList(req.params.roomid, function (err, Jackpotlist) {
            if (err) {
                res.send(err);
            } else {
                res.json(Jackpotlist);
            }
        });
    } catch (err) {
        return next(err);
    }
};

exports.get_currentettingByTypeID = function (req, res) {
    try {
        Jackpotlist.getcurrentSettingByTypeID(req.params.typeid, function (err, Jackpotlist) {
            if (err) {
                res.send(err);
            } else {
                res.json(Jackpotlist);
            }
        });
    } catch (err) {
        return next(err);
    }
};






exports.get_Jackpotdatarealtime = function(req, res) {
    try {
        Jackpotlist.GetjackpotRealtimeBydate(req.params.idapi, function(err, Jackpotlist) {
            if (err) {
                res.send(err);
            } else {
                res.json(Jackpotlist);
            }
        });
    } catch (err) {
        return next(err);
    }
};


exports.test_getlist = function(req, res) {
    try {
        res.json({ message: 'Test successfully' });
    } catch (err) {
        return next(err);
    }
};