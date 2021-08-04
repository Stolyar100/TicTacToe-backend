const { Schema, model } = require('mongoose');
const GameSymbols = require('../shared/game-symbols');

const PlayerSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  symbol: { type: String, enum: GameSymbols.symbolEnum, required: true },
});

const field = { type: String, enum: GameSymbols.fieldStateEnum, default: '' };

const GameSchema = new Schema({
  inviteCode: { type: String, unique: true, required: true },
  players: [PlayerSchema],
  gameField: {
    0: field,
    1: field,
    2: field,
    3: field,
    4: field,
    5: field,
    6: field,
    7: field,
    8: field,
  },
  currentMove: { type: Schema.Types.ObjectId, ref: 'User' },
});

module.exports = model('Game', GameSchema);
