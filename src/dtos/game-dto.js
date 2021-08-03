module.exports = class GameDto {
  constructor({ game, requestsUserId, opponentData }) {
    this.inviteCode = game.inviteCode;
    this.gameField = Array.from({ ...game.gameField, length: 9 });
    this.isMoveAllowed = game.currentMove === requestsUserId;
    this.opponent = opponentData || null;
  }
};
