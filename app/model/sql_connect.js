'user strict';


var mysql_npm = require('mysql');
//local mysql db connection
var db_config = {
    host: '52.221.213.235',
    user: 'lottocorp',
    password: '741852963',
    database: 'vlotto',
    queueLimit: 0,
    waitForConnection: true
};



var connection = mysql_npm.createPool(db_config);


function reconnect(connection){
    console.log("\n New connection tentative...");

    //- Create a new one
    connection = mysql_npm.createPool(db_config);

    //- Try to reconnect
    connection.getConnection(function(err){
        if(err) {
            //- Try to connect every 2 seconds.
            setTimeout(reconnect(connection), 2000);
        }else {
            console.log("\n\t *** New connection established with the database. ***")
            return connection;
        }
    });
}


connection.on('error', function(err) {

    if(err.code === "PROTOCOL_CONNECTION_LOST"){    
        console.log("/!\\ Cannot establish a connection with the database. /!\\ ("+err.code+")");
        return reconnect(connection);
    }

    else if(err.code === "PROTOCOL_ENQUEUE_AFTER_QUIT"){
        console.log("/!\\ Cannot establish a connection with the database. /!\\ ("+err.code+")");
        return reconnect(connection);
    }

    else if(err.code === "PROTOCOL_ENQUEUE_AFTER_FATAL_ERROR"){
        console.log("/!\\ Cannot establish a connection with the database. /!\\ ("+err.code+")");
        return reconnect(connection);
    }

    else if(err.code === "PROTOCOL_ENQUEUE_HANDSHAKE_TWICE"){
        console.log("/!\\ Cannot establish a connection with the database. /!\\ ("+err.code+")");
    }

    else{
        console.log("/!\\ Cannot establish a connection with the database. /!\\ ("+err.code+")");
        return reconnect(connection);
    }

});


module.exports = connection;









                                                  // the old one cannot be reused.

//  connection.connect(function(err) {     
  //  var now = new Date();
  //  console.log(now)        // The server is either down
  //  if(err) {                                     // or restarting (takes a while sometimes).
   //   console.log('error when connecting to db:', err);
   //   setTimeout(handleDisconnect, 2000); // We introduce a delay before attempting to reconnect,
  //  }                                     // to avoid a hot loop, and to allow our node script to
//  });                                     // process asynchronous requests in the meantime.
                                          // If you're also serving http, display a 503 error.
 // connection.on('error', function(err) {
  //  console.log('db error', err);
  //  if(err.code === 'PROTOCOL_CONNECTION_LOST') { // Connection to the MySQL server is usually
   //   handleDisconnect();                         // lost due to either server restart, or a
  //  } else {                                      // connnection idle timeout (the wait_timeout
  //    throw err;                                  // server variable configures this)
 //   }
 // });
 // }
 // catch (error) {
        //    console.error(error);
      //  }
//}


//handleDisconnect();





