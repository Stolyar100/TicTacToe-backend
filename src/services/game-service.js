const GameDto = require('../dtos/game-dto');
const ApiError = require('../exceptions/api-error');
const GameModel = require('../models/game-model');

class GameService {
  async createGame(userId, symbol) {
    if (!symbol) {
      throw ApiError.BadRequest('symbol field is required');
    }

    const inviteCode = generateInviteCode();
    const game = await GameModel.create({
      inviteCode,
      players: [{ user: userId, symbol }],
    });
    const gameDto = new GameDto(game, userId);

    return { ...gameDto };
  }

  #generateInviteCode() {
    const code = Math.random().toString(16).substr(2, 7);
    return code;
  }
}

module.exports = new GameService();
