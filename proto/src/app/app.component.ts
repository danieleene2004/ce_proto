import { Component } from '@angular/core';
import { Block, BlockType } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  width: number = 18;
  height: number = 15;

  grid: Block[][] = [];

  brush: BlockType = BlockType.empty

  constructor() {

    for (let i = 0; i < this.height; i++) {
      let temp: Block[] = [];
      for (let j = 0; j < this.width; j++) {
        temp.push(new Block());
      }
      this.grid.push(temp)
    }
  }

  apply(button: HTMLButtonElement) {
    button.innerHTML = this.brush == BlockType.empty ? "" : this.brush == BlockType.house ? "H" : "P";
  }
  
  brushE() {
    this.brush = BlockType.empty;
  }
  brushH() {
    this.brush = BlockType.house;
  }
  brushP() {
    this.brush = BlockType.panel;
  }
}
