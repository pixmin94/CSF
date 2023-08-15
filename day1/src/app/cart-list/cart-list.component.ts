import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent {
  @Input() cartItems: any[] = []

  deleteItem(event: string) {
    console.log('deleteItem: ' + event)

    let objFound = this.cartItems.find(o => o.name === event)
    let foundIndex = this.cartItems.indexOf(objFound, 0)
    this.cartItems.splice(foundIndex,1)
  }
}
