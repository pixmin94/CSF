import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent {
  @Input() inventory: any[] = []

  @Output() onSelectedItem: EventEmitter<string> = new EventEmitter()

  itemSelected(item: any) {
    console.log('itemSelected: ' + item)
    this.onSelectedItem.emit(item)
  }
}
