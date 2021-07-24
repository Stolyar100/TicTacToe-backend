const ApiError = require('../exceptions/api-error');
const GameService = require('../services/game-service');

class GameController {
  async createGame(req, res, next) {
    try {
      const { symbol } = req.body;
      const { id } = req.user;

      const gameData = await GameService.createGame(id, symbol);

      return res.status(201).json(gameData);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new GameController();
