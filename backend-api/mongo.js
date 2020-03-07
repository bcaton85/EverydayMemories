var environment = require('./environments/environment.js');
var mongoose = require('mongoose');
let dbUrl = environment.dbUrl;

module.exports = {
    connect: (cb) => {
        mongoose.connect(dbUrl,{ useUnifiedTopology: true, useNewUrlParser: true });

        mongoose.connection.on('connected', function(){
            console.log("mongodb connection successful")
            cb()
        });
    
        mongoose.connection.on('error', function(err){
            console.log("Mongoose default connection has occured "+err+" error");
        });
    
        // mongoose.connection.on('disconnected', function(){
        //     console.log(disconnected("Mongoose default connection is disconnected"));
        // });
    
        process.on('SIGINT', function(){
            mongoose.connection.close(function(){
                console.log("Mongoose default connection is disconnected due to application termination");
                process.exit(0)
            });
        });

        // TODO: handle other SIG events
    }
}