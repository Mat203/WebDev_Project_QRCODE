const router = require('express').Router();
const messageController = require('../controllers/messageController');

router.get('/', messageController.findDataHandler);
router.get('/new', messageController.createMessage);
router.post('/message', messageController.messageHandler);
router.get('/:id', messageController.idHandler);

module.exports = router;