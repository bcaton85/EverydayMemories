const {Datastore} = require('@google-cloud/datastore');

// Creates a client
const db = new Datastore();

module.exports = db;