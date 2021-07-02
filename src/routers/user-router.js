const { Router } = require('express');
const { body } = require('express-validator');
const UserController = require('../controllers/user-controller');

const UserRouter = new Router();

UserRouter.post(
  '/registration',
  body('email').isEmail(),
  body('password').isLength({ min: 6, max: 32 }),
  UserController.registration
);
UserRouter.post('/login', UserController.login);
UserRouter.post('/logout', UserController.logout);
UserRouter.get('/activate/:link', UserController.activate);
UserRouter.get('/refresh', UserController.refresh);
UserRouter.get('/users', UserController.getUsers);

module.exports = UserRouter;
