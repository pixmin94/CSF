import { OrderService } from './../order.service';
import { Component, OnInit, inject } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Order } from '../models';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css']
})
export class CreateOrderComponent implements OnInit{
  orderForm!: FormGroup
  lineItemsArray!: FormArray

  // constructor(private fb: FormBuilder, private service: OrderService) { }

  private fb = inject(FormBuilder)
  private service = inject(OrderService)

  ngOnInit(): void {
    this.orderForm = this.createOrder()
  }

  submit() {
    const order: Order = this.orderForm.value
    this.service.submitOrder(order)
      .then(result =>
        console.log(result))
  }

  addLineItem() {
    this.lineItemsArray.push(
      this.fb.group({
        name: this.fb.control<string>('', [ Validators.required ]),
        quantity: this.fb.control<number>(NaN),
        unitPrice: this.fb.control<number>(NaN)
      })
    )
  }

  removeLineItem(idx: number) {
    this.lineItemsArray.removeAt(idx)
  }

  private createOrder() {
    this.lineItemsArray = this.fb.array([])
    return this.fb.group({
      name: this.fb.control<string>('', [Validators.required, Validators.minLength(3)]),
      email: this.fb.control<string>('' , [ Validators.required, Validators.email]),
      express: this.fb.control<boolean>,
      lineItems: this.lineItemsArray
    })
  }
}


