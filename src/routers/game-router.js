const { Router } = require('express');
const { body } = require('express-validator');
const GameController = require('../controllers/game-controller');
const authMiddleware = require('../middlewares/auth-middleware');
const GameSymbols = require('../shared/game-symbols');

const GameRouter = new Router();

GameRouter.post(
  '/',
  [
    body('symbol')
      .exists()
      .withMessage('symbol field is required')
      .bail()
      .notEmpty()
      .withMessage('symbol field can not be empty')
      .isIn(GameSymbols.symbolEnum)
      .withMessage(
        `symbol field value should be one of ${GameSymbols.symbolEnum}`
      ),
  ],
  authMiddleware,
  GameController.createGame
);
GameRouter.post('/:inviteCode', authMiddleware, GameController.joinGame);
GameRouter.get('/:inviteCode', authMiddleware, GameController.getGame);
GameRouter.put('/:inviteCode', authMiddleware, GameController.makeMove);
GameRouter.delete('/:inviteCode', authMiddleware, GameController.deleteGame);

module.exports = GameRouter;
