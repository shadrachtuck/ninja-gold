import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ninja Gold';
  total;

  constructor(){
    this.total = 0;
  }
    addGold() {
      this.total++;
    }

    reset(){
      this.total = 0;
    }

    farm(min,max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return this.total += Math.floor(Math.random() * (20 - 10 + 1)) + 10;
    }
    cave(min,max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return this.total += Math.floor(Math.random() * (10 - 5 + 1)) + 5;
    }
    house(min,max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return this.total += Math.floor(Math.random() * (10 - 5 + 1)) + 5;
    }
    casino(min,max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return this.total += Math.floor(Math.random() * (100 - 5 + 1)) + 5;
    }
}
