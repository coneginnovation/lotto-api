var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
const LineAPI = require('line-api');
const notify = new LineAPI.Notify({
	token: "W2XfmX6PiA4XwhzrPO3oeK2e4kwCFbm4mn6rLadzrQl"
})

io.on('connection', function (client) {
	console.info('Client connected  : ' + client.id);
	console.info('Client connected  : ' + client.handshake.address);


	client.on('roomcontrol', function (data) {
		let msg = client.handshake.address;
		notify.send({
			message: "คุณทำการอนุมัติเพิ่มเงิน User :dlotto@mail.com จำนวน : 5,000 บาท : ผู้ทำรายการ : Wichit"
		})
		console.log("คุณทำการอนุมัติเพิ่มเงิน User :dlotto@mail.com จำนวน : 5,000 บาท : ผู้ทำรายการ : Wichit");
	});

	client.on('roomchecknumber', function (data) {



		let msg = client.handshake.address;
		notify.send({
			message: "ปิดการขายตัวเลข 62 ของหวยไทย เนื่องจากการซื้อเกินกำหนด เป็นจำนวน 1,000 บาท:  : Wichit"
		})
	//	console.log("คุณทำการอนุมัติเพิ่มเงิน User :dlotto@mail.com จำนวน : 5,000 บาท : ผู้ทำรายการ : Wichit");
	});

	


	// When socket send data complete.
	client.on('end', function () {
		clients.splice(clients.indexOf(socket), 1);
	});

});

server.listen(5570, "0.0.0.0");
console.log('Node app  is running on port 5560');