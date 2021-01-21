var express = require('express');
var schedule = require('node-schedule');
var unirest = require("unirest");
var req = unirest("GET", "https://limestudio-thailottery.p.rapidapi.com/v1/Results/ThaiLotto/FindDraw/30122562");
var path = require('path');
var sql = require(path.resolve(__dirname, 'app/model/sql_connect.js'));
//var rule = new schedule.RecurrenceRule();
//rule.minute = new schedule.Range(0, 0, 1 / 2);

var j = schedule.scheduleJob('*/1 * * * *', function(fireDate) {

         req.headers({
            "x-rapidapi-host": "limestudio-thailottery.p.rapidapi.com",
            "x-rapidapi-key": "f8064805e7msh542380381e98b4cp1cd538jsne0bda411ec3d"
        });

        req.end(function(res) {
            if (res.error) throw new Error(res.error);
            var obj = JSON.stringify(res.body);
            var object = JSON.parse(obj); 
          //  AddfinishAuction(object);
            AddfinishRealtime(object);

    });

    // AddfinishAuction(object);
    // var ObjectTest = getDeposit('30122562');
    //  var test = JSON.parse(ObjectTest);
    //   console.log(ObjectTest);
    //  console.log('รางวัล 2 ตัวบน : ' + JSON.parse(object.Prize_1).numbers.substring(6, 4));
    //  console.log('รางวัล 2 ตัวล่าง : ' + JSON.parse(object.Prize_Last_2).numbers);
    //  console.log('รางวัล 3 ตัวหลัง : ' + JSON.parse(object.Prize_First_3).numbers[0]);
    //  console.log('รางวัล 3 ตัวหลัง : ' + JSON.parse(object.Prize_First_3).numbers[1]);
    //  console.log('รางวัล 3 ตัวหน้า : ' + JSON.parse(object.Prize_Last_3).numbers[0]);
    //  console.log('รางวัล 3 ตัวหน้า : ' + JSON.parse(object.Prize_Last_3).numbers[1]);




});

function AddfinishRealtime(Object, result) {
    //  obj = JSON.parse(Object);
    var suerys = "INSERT INTO tblThaiLottery (idapi, dateend,Pize2Over,Pize2Lower,Pize3_1Over,Pize3_2Over,Pize3_1Lower,Pize3_2Lower,Pize1)";
    suerys += "VALUES ('" + Object.Draw_Id + "','" + Object.Date + "','" + JSON.parse(Object.Prize_1).numbers.substring(6, 4) +
    "','" + JSON.parse(Object.Prize_Last_2).numbers + "','" + JSON.parse(Object.Prize_First_3).numbers[0] +
    "','" + JSON.parse(Object.Prize_First_3).numbers[1] + "','" + JSON.parse(Object.Prize_First_3).numbers[0]  + "','" + JSON.parse(Object.Prize_First_3).numbers[1]  + "','" + JSON.parse(Object.Prize_1).numbers + "')";
  
   sql.query(suerys, function(err, result) {
        if (err) {
            console.log("error: ", err);
        }
    });
};

function AddfinishAuction(Object, result) {
    //  obj = JSON.parse(Object);
    var suerys = "INSERT INTO tblJackpot (Date, Data, idapi)";
    suerys += "VALUES ('" + Object.Date + "','" + Object + "','" + Object.Draw_Id + "')";
    sql.query(suerys, function(err, result) {
        if (err) {
            console.log("error: ", err);
        }
    });
};