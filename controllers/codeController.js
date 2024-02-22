const QRCode = require('qrcode');
const QRCodeModel = require('../models/qrcode');

async function getAllQRCodes(req, res) {
    try {
        const qrcodes = await QRCodeModel.find();
        res.render('qrcodes-list', { qty: qrcodes.length, qrcodes: qrcodes });
    } catch (error) {
        console.error('Error fetching QR codes:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function generateQRCode(req, res) {
    try {
        const link = req.body.data;
        const qrCodeImage = await QRCode.toDataURL(link);
        const qrCode = new QRCodeModel({ link: link, image: qrCodeImage });
        await qrCode.save();
        res.redirect('/display-qr/' + qrCode._id);
    } catch (error) {
        console.error('Error generating QR code:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}


async function displayQRCode(req, res) {
    try {
        const qrCode = await QRCodeModel.findById(req.params.id);
        res.render('display-qr', { qrCode: qrCode });
    } catch (error) {
        console.error('Error displaying QR code:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports = { getAllQRCodes, generateQRCode, displayQRCode };

