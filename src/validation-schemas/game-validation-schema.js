const GameSymbols = require('../shared/game-symbols');

const gameValidationSchema = {
  symbol: {
    in: ['body'],
    exists: { bail: true },
    notEmpty: { bail: true },
    isIn: GameSymbols.symbolEnum,
    errorMessage: `symbol is required field, and should have value one of ${GameSymbols.symbolEnum}`,
  },
};

module.exports = gameValidationSchema;
