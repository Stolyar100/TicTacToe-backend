const GameDto = require('../dtos/game-dto');
const ApiError = require('../exceptions/api-error');
const GameModel = require('../models/game-model');
const UserModel = require('../models/user-model');
const GameSymbols = require('../shared/game-symbols');

class GameService {
  async createGame(userId, symbol) {
    const inviteCode = this._generateInviteCode();
    const game = await GameModel.create({
      inviteCode,
      players: [{ user: userId, symbol }],
    });
    const gameDto = new GameDto({ game, requestsUserId: userId });

    return { ...gameDto };
  }

  async joinGame(inviteCode, userId) {
    const gameToJoin = await GameModel.findOne({ inviteCode });
    if (!gameToJoin) {
      throw ApiError.BadRequest('invalid invite code');
    }
    const { user: opponentId, symbol: opponentSymbol } = gameToJoin.players[0];
    const opponentData = await UserModel.findById(opponentId);
    const currentUserSymbol = GameSymbols.getOppositeSymbol(opponentSymbol);

    gameToJoin.players.push({ user: userId, symbol: currentUserSymbol });
    gameToJoin.currentMove = this._chooseRandomElement(gameToJoin.players);
    await gameToJoin.save();

    const gameDto = new GameDto({
      game: gameToJoin,
      requestsUserId: userId,
      opponentData,
    });
    return gameDto;
  }

  _generateInviteCode() {
    const code = Math.random().toString(16).substr(2, 7);
    return code;
  }

  _chooseRandomElement(array) {
    const randomId = Math.floor(Math.random() * array.length);
    return array[randomId];
  }
}

module.exports = new GameService();
