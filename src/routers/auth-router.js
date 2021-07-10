const { Router } = require('express');
const { body } = require('express-validator');
const UserController = require('../controllers/user-controller');

const AuthRouter = new Router();

AuthRouter.post(
  '/registration',
  body('email').isEmail(),
  body('password').isLength({ min: 6, max: 32 }),
  UserController.registration
);
AuthRouter.post('/login', UserController.login);
AuthRouter.put('/logout', UserController.logout);
AuthRouter.get('/activate/:link', UserController.activate);
AuthRouter.get('/refresh', UserController.refresh);

module.exports = AuthRouter;
