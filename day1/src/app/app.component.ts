import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'day1';
  updatedNumber: number
  leftEnabled: boolean = true
  rightEnabled: boolean = true

  changedNumber(eventNumber: number) {
    this.updatedNumber = eventNumber
    console.log('parent number: ' + this.updatedNumber)
  }

  ToggleLeft() {
    this.leftEnabled = !this.leftEnabled
  }

  ToggleRight() {
    this.rightEnabled = !this.rightEnabled
  }

}
