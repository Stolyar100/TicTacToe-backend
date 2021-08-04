class GameSymbols {
  constructor() {
    this.x = 'x';
    this.o = 'o';
    this.emptyField = '';
    this.symbolEnum = [this.x, this.o];
    this.fieldStateEnum = [this.x, this.o, this.emptyField];
  }

  getOppositeSymbol(symbolToInvert) {
    if (symbolToInvert === this.x) {
      return this.o;
    }
    return this.x;
  }
}

module.exports = new GameSymbols();
