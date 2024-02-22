const { saveUser, updateUser, removeUser } = require('../helpers/users');
const User = require('../models/user');

function extractUserData(req) {
    return {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        isAdmin: req.body.isAdmin
    };
}

async function getAllUsers(req, res) {
    try {
        const users = await User.find();
        res.render('users-list', { qty: users.length, users: users });
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function getUserById(req, res) {
    const userId = req.params.id;
    try {
        const user = await User.findOne({ _id: userId });
        res.render('user-profile', { user: user});
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

function createUser(req, res) {
    res.render('create-user-form');
}

function postUser(req, res) {
    const { firstName, lastName, email, password, isAdmin } = extractUserData(req);
    saveUser(firstName, lastName, email, password, isAdmin)
        .then((user) => res.render('user-profile', {user: user}))
        .catch(() => res.send('user NOT created'));
}

async function updateUserById(req, res) {
    const userId = req.params.id;
    try {
        const user = await User.findOne({ _id: userId });
        res.render('update-user-form', {user: user});
    } catch (error) {
        console.error('Error fetching user to update:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

function putUser(req, res) {
    const userId = req.params.id;
    const userObj = extractUserData(req);
    updateUser(userId, userObj)
        .then(() => res.redirect(`/users/${userId}`))
        .catch(() => res.send('user NOT replaced'));
}

function patchUser(req, res) {
    const userId = req.params.id;
    const userObj = {};
    for (let key in req.body) {
        if (req.body[key]) {
            userObj[key] = req.body[key];
        }
    }
    updateUser(userId, userObj)
        .then(() => res.redirect(`/users/${userId}`))
        .catch(() => res.send('user NOT updated'));
}

async function deleteUser(req, res) {
    const userId = req.params.id;
    removeUser(userId)
        .then(() => res.sendStatus(200))
        .catch(() => res.sendStatus(500));
}

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    postUser,
    updateUserById,
    putUser,
    patchUser,
    deleteUser
};