const router = require('express').Router();
const qrCodeController = require('../controllers/codeController');
const messageController = require('../controllers/messageController');

router.get('/', messageController.findDataHandler);
router.post('/generate-qr', qrCodeController.generateQRCode);
router.get('/display-qr/:id', qrCodeController.displayQRCode);

module.exports = router;
