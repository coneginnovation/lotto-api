function create_UUID() {
  var dt = new Date().getTime();
  var uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(
    c
  ) {
    var r = (dt + Math.random() * 16) % 16 | 0;
    dt = Math.floor(dt / 16);
    return (c == "x" ? r : (r & 0x3) | 0x8).toString(16);
  });
  return uuid;
}
var dateFormat = require("dateformat");
var now = new Date();
var request = require("request");
var options = {
  method: "POST",
  url: "https://APIPORTAL.kasikornbank.com:12002/pos/qr_request",
  headers: {
    "cache-control": "no-cache",
    "Content-Type": "application/json"
  },
  body: {
    partnerTxnUid: create_UUID(),
    partnerId: "PTR4027872",
    partnerSecret: "05b4d010099e4965865f5d731a8d34c3",
    requestDt: "2018-04-05T12:30:00+07:00",
    merchantId: "KB034505410804",
    terminalId: "term1",
    qrType: "3",
    txnAmount: 100.5,
    txnCurrencyCode: "THB",
    reference1: "INV001",
    reference2: null,
    reference3: null,
    reference4: null,
    metadata: "ถุงผ้า 80.50, ดินสอ 20.00"
  },
  json: true
};

request(options, function (error, response, body) {
    if (error) throw new Error(error);
    console.log(response);
    console.log( now.toISOString());
        console.log(create_UUID());
});