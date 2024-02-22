const router = require('express').Router();
const cookieController = require('../controllers/cookieController');

router.get('/', cookieController.giveInfo);
router.get('/set', cookieController.setCookie);
// /set?title=cookieTitle&value=cookieValue
// /set?title=cookieTitle1&value=cookieValue1&title=cookieTitle2&value=cookieValue2
router.get('/get/:cookieTitle', cookieController.getCookie);
// /get/cookieTitle

module.exports = router;