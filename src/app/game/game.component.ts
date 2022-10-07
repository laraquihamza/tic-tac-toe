import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  gameTab=[0,0,0,0,0,0,0,0,0];
  winningPlayer = 0;
  currentPlayer=1;
  constructor() { }

  ngOnInit(): void {
  }
  checkWinning(){
    [0,1,2].forEach(index=>{
      if(this.gameTab[index]!== 0 && this.gameTab[index]===this.gameTab[index+3] && this.gameTab[index]===this.gameTab[index+6]){
        this.winningPlayer = this.gameTab[index];
      }
      else if( this.gameTab[index * 3]!== 0 && this.gameTab[index * 3]===this.gameTab[index*3 +1] && this.gameTab[index * 3]===this.gameTab[index*3 +2]){
        this.winningPlayer = this.gameTab[index * 3];
      }
    });
    [2,4].forEach(index=>{
      if(this.gameTab[4] !== 0 && this.gameTab[4] === this.gameTab[4-index] && this.gameTab[4] === this.gameTab[4+index]){
        this.winningPlayer = this.gameTab[4];
      }
    })

  }
  getImage(i: number){
    if(i===0){
      return null
    }
    else if(i===1){
      return '/images/cross.svg';
    }
    else {
      return '/images/circle.svg';
    }
  }
  choseCase(index: number){
    if(this.gameTab[index] === 0 && this.winningPlayer === 0){
      this.gameTab[index] = this.currentPlayer === 1 ? 1 : 2;
      this.currentPlayer = this.currentPlayer === 1 ? 2 : 1;  
      this.checkWinning(); 
      console.log(this.winningPlayer);   
    }
  }

  resetGame() {
    this.gameTab=[0,0,0,0,0,0,0,0,0];
    this.winningPlayer = 0;
    this.currentPlayer= 1;
  }
}
