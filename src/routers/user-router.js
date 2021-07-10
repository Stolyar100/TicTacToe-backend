const { Router } = require('express');
const UserController = require('../controllers/user-controller');
const authMiddleware = require('../middlewares/auth-middleware');

const UserRouter = new Router();

UserRouter.get('/', authMiddleware, UserController.getUsers);

module.exports = UserRouter;
