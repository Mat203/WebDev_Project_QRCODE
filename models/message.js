const mongoConnection = require('../connections/mongoConnection');
const mongoose = mongoConnection.mongo;

const messageSchema = new mongoose.Schema({
    message: String,
    sender: String,
    receiver: String,
    date: Date,
    isRead: Boolean
});

const message = mongoose.model('Message', messageSchema);

module.exports = message;