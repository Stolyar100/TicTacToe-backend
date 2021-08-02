const { validationResult } = require('express-validator');
const ApiError = require('../exceptions/api-error');
const GameService = require('../services/game-service');

class GameController {
  async createGame(req, res, next) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return next(ApiError.BadRequest('Validation error', errors.array()));
      }
      const { symbol } = req.body;
      const userId = req.user.id;

      const gameData = await GameService.createGame(userId, symbol);

      return res.status(201).json(gameData);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new GameController();
