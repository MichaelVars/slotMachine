import { Component } from '@angular/core';

@Component({
  selector: 'app-wheel',
  templateUrl: './wheel.component.html',
  styleUrls: ['./wheel.component.css']
})
export class WheelComponent {
  
  emojis = ["📜", "🤣", "🐉", "🔥", "💣", "🎉"]
  options:Array<string> = [];
  constructor(){
    for(let i = 0; i < 1001; i++){
      for(let j = 0; j < this.emojis.length; j++){
        this.options.push(this.emojis[j]);
      }
    }
  }

}
