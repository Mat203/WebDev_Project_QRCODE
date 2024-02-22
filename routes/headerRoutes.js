const router = require('express').Router();
const headerController = require('../controllers/headerController');

router.get('/', headerController.giveInfo);
router.get('/set', headerController.setHeader);
// /set?title=headerTitle&value=headerValue
// /set?title=headerTitle1&value=headerValue1&title=headerTitle2&value=headerValue2
router.get('/get/:headerTitle', headerController.getHeader);
// /get/headerTitle
module.exports = router;