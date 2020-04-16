class Game {
  constructor(p1, p2, height=10, width=10){
    this.players = [p1, p2];
    this.height = height;
    this.width = width;
    this.currPlayer = p1;
    this.makeBoards();
  }

  makeBoards(){
    this.board1 = [];
    for(let y = 0; y < this.height; y++){
      this.board1.push(Array.from({ length: this.width }));
    }
    this.board2 = [];
    for(let y = 0; y < this.height; y++){
      this.board2.push(Array.from({ length: this.width }));
    }
  }
}

export default Game;