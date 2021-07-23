const { Schema, model } = require('mongoose');

const gameSymbols = ['x', 'o'];
const fieldState = [...gameSymbols, ''];

const fieldSchema = new Schema({ type: String, enum: fieldState });

const PlayerSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  symbol: { type: String, enum: gameSymbols, required: true },
});

const GameSchema = new Schema({
  inviteCode: { type: String, unique: true, required: true },
  players: [PlayerSchema],
  gameField: {
    type: [fieldSchema],
    default: ['', '', '', '', '', '', '', '', ''],
  },
  currentMove: { type: Schema.Types.ObjectId, ref: 'User' },
});

module.exports = model('Game', GameSchema);
