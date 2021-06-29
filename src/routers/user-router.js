const { Router } = require('express');
const UserController = require('../controllers/user-controller');

const UserRouter = new Router();

UserRouter.post('/registration', UserController.registration);
UserRouter.post('/login', UserController.login);
UserRouter.post('/logout', UserController.logout);
UserRouter.get('/activate/:link', UserController.activate);
UserRouter.get('/refresh', UserController.refresh);
UserRouter.get('/users', UserController.getUsers);

module.exports = UserRouter;
