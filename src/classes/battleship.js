class Game {
  constructor(p1, p2, height = 5, width = 5) {
    this.players = [p1, p2];
    this.height = height;
    this.width = width;
    this.currPlayer = p1;
    this.makeBoards();
  }

  makeBoards() {
    this.board1 = [];
    this.board2 = [];
    for (let y = 0; y < this.height; y++) {
      let subArray = [];
      for(let x = 0; x < this.width; x++) {
        subArray.push({
          isPegged: false,
          hasShip:false
        });
      }
      this.board1.push(subArray);
      this.board2.push(subArray);
    }
  }

  fillBoards() {
    this.board1[0][0].hasShip = true;
    this.board2[0][0].hasShip = true;
  }
}

export default Game;