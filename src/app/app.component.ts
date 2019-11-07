import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  linesOfCode = 0;
  betterLoCMulti = 1;
  betterLoCNeeded = 10;

  click() {
    this.linesOfCode += this.betterLoCMulti;
  }
  betterLoC() {
    this.betterLoCMulti++;
    this.linesOfCode -= this.betterLoCNeeded;
    this.betterLoCNeeded *= 2;
  }
}
