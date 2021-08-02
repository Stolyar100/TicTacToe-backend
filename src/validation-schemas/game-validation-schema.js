const GameSymbols = require('../shared/game-symbols');

const gameValidationSchema = {
  symbol: {
    in: ['body'],
    exists: {
      bail: true,
      errorMessage: 'symbol is required field',
    },
    notEmpty: { bail: true, errorMessage: 'symbol is required field' },
    isIn: {
      options: [GameSymbols.symbolEnum],
      errorMessage: `symbol field must have value one of ${GameSymbols.symbolEnum}`,
    },
  },
};

module.exports = gameValidationSchema;
