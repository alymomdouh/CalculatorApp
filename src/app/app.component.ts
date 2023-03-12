import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CalculatorApp';
  resulte = "";
  getAction(item: any) {
    this.resulte += item;
  }
  equal() {
    this.resulte = eval(this.resulte).tofix(2);
  }
  reset() {
    this.resulte = "";
  }
}
