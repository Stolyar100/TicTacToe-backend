const { Schema, model } = require('mongoose');

const gameSymbols = ['x', 'o'];
const fieldState = [...gameSymbols, ''];

const GameSchema = new Schema({
  inviteCode: { type: String, unique: true, required: true },
  host: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  opponent: { type: Schema.Types.ObjectId, ref: 'User' },
  hostSymbol: { type: String, enum: gameSymbols },
  gameField: [{ type: String, enum: fieldState }],
  currentMove: { type: Schema.Types.ObjectId, ref: 'User' },
});

module.exports = model('Game', GameSchema);
