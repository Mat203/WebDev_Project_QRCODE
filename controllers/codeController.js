const QRCode = require('qrcode');
const QRCodeModel = require('../models/qrcode');

async function getAllQRCodes(req, res) {
    try {
        const qrcodes = await QRCodeModel.find();
        console.log(qrcodes);
        res.render('qr-archive', { qrcodes: qrcodes }); 
    } catch (error) {
        console.error('Error fetching QR codes:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}


async function generateQRCode(req, res) {
    try {
        const name = req.body.name;
        const link = req.body.data;
        const important = req.body.important === 'on';
        const qrCodeImage = await QRCode.toDataURL(link);
        const qrCode = new QRCodeModel({ name: name, link: link, important: important, image: qrCodeImage });
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

async function getQRCodeImage(req, res) {
    try {
        const qrCode = await QRCodeModel.findById(req.params.id);
        const qrCodeImage = await QRCode.toDataURL(qrCode.link);
        console.log(qrCodeImage);
        res.send(qrCodeImage);
    } catch (error) {
        console.error('Error generating QR code image:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function deleteQR(req, res) {
    try {
        const id = req.params.id;
        await QRCodeModel.findByIdAndDelete(id);
        res.redirect('/qrcodes');
    } catch (error) {
        console.error('Error deleting QR code:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function updateQRCode(req, res) {
    try {
        const id = req.params.id;
        const newName = req.body.name;
        const newImportant = req.body.important === 'on';
        await QRCodeModel.findByIdAndUpdate(id, { name: newName, important: newImportant });
        res.redirect('/display-qr/' + id);
    } catch (error) {
        console.error('Error updating QR code:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function getUpdatePage(req, res) {
    try {
        const qrCode = await QRCodeModel.findById(req.params.id);
        res.render('update-qr', { qrCode: qrCode });
    } catch (error) {
        console.error('Error fetching QR code:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports = { getAllQRCodes, generateQRCode, displayQRCode, getQRCodeImage, deleteQR, updateQRCode, getUpdatePage };


