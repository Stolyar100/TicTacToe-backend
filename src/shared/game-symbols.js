class GameSymbols {
  constructor() {
    this.x = 'x';
    this.o = 'o';
    this.emptyField = '';
    this.symbolEnum = [this.x, this.o];
    this.fieldStateEnum = [this.x, this.o, this.emptyField];
  }
}

module.exports = new GameSymbols();
