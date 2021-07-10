const { Router } = require('express');
const GameController = require('../controllers/game-controller');
const authMiddleware = require('../middlewares/auth-middleware');

const GameRouter = new Router();

GameRouter.post('/', authMiddleware, GameController.createGame);
GameRouter.post('/:inviteCode', authMiddleware, GameController.joinGame);
GameRouter.get('/:inviteCode', authMiddleware, GameController.getGame);
GameRouter.put('/:inviteCode', authMiddleware, GameController.makeMove);
GameRouter.delete('/:inviteCode', authMiddleware, GameController.deleteGame);

module.exports = GameRouter;
