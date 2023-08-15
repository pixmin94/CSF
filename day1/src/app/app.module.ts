import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FruitsComponent } from './components/fruits/fruits.component';
import { DataEntryComponent } from './data-entry/data-entry.component';
import { DataDisplayComponent } from './data-display/data-display.component';
import { CartListComponent } from './cart-list/cart-list.component';
import { ItemListComponent } from './components/item-list/item-list.component';
import { ItemsListComponent } from './items-list/items-list.component';

@NgModule({
  declarations: [
    AppComponent,
    FruitsComponent,
    DataEntryComponent,
    DataDisplayComponent,
    CartListComponent,
    ItemListComponent,
    ItemsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
