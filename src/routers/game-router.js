const { Router } = require('express');
const { checkSchema } = require('express-validator');
const GameController = require('../controllers/game-controller');
const authMiddleware = require('../middlewares/auth-middleware');
const gameValidationSchema = require('../validation-schemas/game-validation-schema');

const GameRouter = new Router();

GameRouter.post(
  '/',
  checkSchema(gameValidationSchema),
  authMiddleware,
  GameController.createGame
);
GameRouter.post(
  '/:inviteCode',
  checkSchema(gameValidationSchema),
  authMiddleware,
  GameController.joinGame
);
GameRouter.get('/:inviteCode', authMiddleware, GameController.getGame);
GameRouter.put('/:inviteCode', authMiddleware, GameController.makeMove);
GameRouter.delete('/:inviteCode', authMiddleware, GameController.deleteGame);

module.exports = GameRouter;
