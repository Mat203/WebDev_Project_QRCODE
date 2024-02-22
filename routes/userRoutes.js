const router = require('express').Router();
const userController = require('../controllers/userController');

router.get('/', userController.getAllUsers);
router.get('/new', userController.createUser);
router.get('/:id', userController.getUserById);
router.get('/:id/update', userController.updateUserById);

router.post('/', userController.postUser);
router.put('/:id', userController.putUser);
router.patch('/:id', userController.patchUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;