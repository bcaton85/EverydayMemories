var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var messageSchema = new Schema({
    userId: String,
    messageText: String,
    submissionDate: String
});

module.exports = mongoose.model('messages',messageSchema);