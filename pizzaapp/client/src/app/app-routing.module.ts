import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './component/main.component';
import { OrdersComponent } from './component/orders.component';

const routes: Routes = [
  {path: '', component: MainComponent, title: 'Main Page'},
  // {path: '/orders/:email', component: OrdersComponent, title: 'Order Page'},
  {path: '**', redirectTo: '/', pathMatch:'prefix'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
