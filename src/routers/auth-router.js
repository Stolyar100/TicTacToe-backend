const { Router } = require('express');
const { checkSchema } = require('express-validator');
const UserController = require('../controllers/user-controller');
const registrationValidationSchema = require('../validation-schemas/registration-validation-schema');

const AuthRouter = new Router();

AuthRouter.post(
  '/registration',
  checkSchema(registrationValidationSchema),
  UserController.registration
);
AuthRouter.post('/login', UserController.login);
AuthRouter.put('/logout', UserController.logout);
AuthRouter.get('/activate/:link', UserController.activate);
AuthRouter.get('/refresh', UserController.refresh);

module.exports = AuthRouter;
