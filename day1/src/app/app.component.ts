import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'day1';
  updatedNumber: number
  leftEnabled: boolean = true
  rightEnabled: boolean = true

  itemsSelected: any[] = []
  inventory: any[] = []
  receivedItems: any[] = []

  ngOnInit(): void {
    this.inventory.push({ name: 'laptop'})
    this.inventory.push({ name: 'eraser'})
    this.inventory.push({ name: 'pencil'})
    this.inventory.push({ name: 'highlighter'})
    this.inventory.push({ name: 'mouse'})

  }

  changedNumber(eventNumber: number) {
    this.updatedNumber = eventNumber
    console.log('parent number: ' + this.updatedNumber)
  }

  selectedItem(event: string) {
    console.log('parent item:' + event)

    if(this.itemsSelected.length == 0) {
      this.itemsSelected.push({ name: event, quantity: 1})
    } else {
      let obj = this.itemsSelected.find( o => o.name === event)
      let foundIndex = this.itemsSelected.indexOf(obj, 0)
      this.itemsSelected[foundIndex].quantity++
    }
  }

  receiveSelectedItem(event: string) {
    console.log('receivedSelectedItem: ' + event)

    if(this.receivedItems.length == 0) {
      this.receivedItems.push({name: event,quantity: 1})
    } else {
      let obj = this.receivedItems.find(o => o.name === event);

      let foundIndex = this.receivedItems.indexOf(obj, 0);

      if (foundIndex >= 0) {
        this.receivedItems[foundIndex].quantity++;
      } else {
        this.receivedItems.push({ name: event, quantity: 1 });
      }
    }

    for (var itm of this.receivedItems) {
      console.log('receiveSelectedItem' + JSON.stringify(itm));
    }

  }

  ToggleLeft() {
    this.leftEnabled = !this.leftEnabled
  }

  ToggleRight() {
    this.rightEnabled = !this.rightEnabled
  }

}
