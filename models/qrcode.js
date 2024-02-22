const mongoConnection = require('../connections/mongoConnection');
const mongoose = mongoConnection.mongo;

const QRCodeSchema = new mongoose.Schema({
    name: String,
    link: String,
    important: Boolean,
});

const QRCode = mongoose.model('QRCode', QRCodeSchema);

module.exports = QRCode;
