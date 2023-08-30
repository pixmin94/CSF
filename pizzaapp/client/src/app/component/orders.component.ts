import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Order } from '../models';
import { PizzaService } from '../service/pizza.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  email!: string
  orders!: Order[]

  constructor(private activatedRoute: ActivatedRoute,
              private service: PizzaService) { }

  ngOnInit(): void {
    const email = this.activatedRoute.snapshot.params['email']
    this.service.getOrders(email).subscribe(orders => {
      this.orders = orders
    })
  }

}
