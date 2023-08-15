import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  items: any[] = []

  @Output() onItemSelected: EventEmitter<any> = new EventEmitter()

  ngOnInit(): void {
    this.items.push({ name: 'apple' });
    this.items.push({ name: 'orange' });
    this.items.push({ name: 'durian' });
    this.items.push({ name: 'cherry' });
    this.items.push({ name: 'peach' });
  }

  itemSelected(event: any) {
    console.log(event)

    this.onItemSelected.emit(event.name)
  }

}
