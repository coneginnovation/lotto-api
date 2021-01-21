var path = require('path');
const express = require('express'),
    app = express(),
    bodyParser = require('body-parser');
port = process.env.PORT || 3000;
var cors = require('cors');

app.listen(port);

app.use(cors({
    origin: '*',
    allowedHeaders: ["Content-Type", "Authorization"]
}));

app.options('*', cors())


app.all('', function(req, res, next) {
 
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    //Auth Each API Request created by user.

    next();


});


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//var routes = require('app/routes/approutes'); //importing route
var routes = require(path.resolve(__dirname, 'app/routes/appRoutes.js'));
routes(app); //register the route
console.log("lisning API Dlotto :3000")
