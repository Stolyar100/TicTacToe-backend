const { Schema, model } = require('mongoose');

const gameSymbols = ['x', 'o'];
const fieldState = [...gameSymbols, ''];

const fieldSchema = new Schema({
  state: { type: String, enum: fieldState, default: '' },
});

const PlayerSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  symbol: { type: String, enum: gameSymbols, required: true },
});

const GameSchema = new Schema({
  inviteCode: { type: String, unique: true, required: true },
  players: [PlayerSchema],
  gameField: {
    0: { type: fieldSchema, default: {} },
    1: { type: fieldSchema, default: {} },
    2: { type: fieldSchema, default: {} },
    3: { type: fieldSchema, default: {} },
    4: { type: fieldSchema, default: {} },
    5: { type: fieldSchema, default: {} },
    6: { type: fieldSchema, default: {} },
    7: { type: fieldSchema, default: {} },
    8: { type: fieldSchema, default: {} },
  },
  currentMove: { type: Schema.Types.ObjectId, ref: 'User' },
});

module.exports = model('Game', GameSchema);
