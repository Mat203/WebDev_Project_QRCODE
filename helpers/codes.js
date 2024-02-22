const QRCode = require('../models/qrcode');

function saveQRCodeInDatabase(name, link, important) {
    const qrCode = new QRCode({ name: name, link: link, important: important });
    return qrCode.save();
}

module.exports = {
    saveQRCode: saveQRCodeInDatabase
};
