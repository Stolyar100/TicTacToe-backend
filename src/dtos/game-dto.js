module.exports = class GameDto {
  constructor(game, requestsUserId, opponent) {
    this.inviteCode = game.inviteCode;
    this.gameField = game.gameField;
    this.isMoveAllowed = game.currentMove === requestsUserId;
    this.opponent = opponent || null;
  }
};
