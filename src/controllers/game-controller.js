const { validationResult } = require('express-validator');
const ApiError = require('../exceptions/api-error');
const GameService = require('../services/game-service');

class GameController {
  constructor() {
    this.createGame = this.createGame.bind(this);
    this.joinGame = this.joinGame.bind(this);
  }

  async createGame(req, res, next) {
    try {
      this._handleValidationResults(req, next);
      const { symbol } = req.body;
      const userId = req.user.id;

      const gameData = await GameService.createGame(userId, symbol);

      return res.status(201).json(gameData);
    } catch (e) {
      next(e);
    }
  }

  async joinGame(res, req, next) {
    try {
      const { inviteCode } = req.params;
      const userId = req.user.id;

      const gameData = await GameService.joinGame(inviteCode, userId);
      return res.status(200).json(gameData);
    } catch (e) {
      next(e);
    }
  }

  async getGame(res, req, next) {
    try {
      const { inviteCode } = req.params;
      const userId = req.user.id;

      const gameData = await GameService.getGame(inviteCode, userId);
      return res.status(200).json(gameData);
    } catch (e) {
      next(e);
    }
  }

  _handleValidationResults(req, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return next(ApiError.BadRequest('Validation error', errors.array()));
    }
  }
}

module.exports = new GameController();
