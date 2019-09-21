var {Datastore} = require('@google-cloud/datastore');

// Creates a client
console.log("[INFO]: Connecting to db");
var db = new Datastore({
	projectId: 'memori',
	keyFilename: './memori-5c6f952e454c.json'
});
console.log("[INFO]: Successfully connected to firestore");

module.exports = db;