import { Subscription } from 'rxjs';
import { Order } from './../models';
import { PizzaService } from './../service/pizza.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  form!: FormGroup
  email!: string
  sub!: Subscription

  constructor(private fb: FormBuilder,
              private service: PizzaService) {}

  ngOnInit(): void {
    this.form = this.createForm()
  }

  submitOrder() {
    const order: Order = this.form.value
    console.log(order)
    this.service.createOrder(order)

    // this.sub = this.service.createOrder(order)
    //   .subscribe(data => {
    //     console.log(data)
    //   })
  }

  createForm() {
    return this.fb.group({
          name: this.fb.control<string>('', [ Validators.required, Validators.minLength(3) ]),
          email: this.fb.control<string>('', [ Validators.email]),
          size: this.fb.control<number>(12, [Validators.required]),
          // base: this.fb.control<string>('', [Validators.required]),
          comments: this.fb.control<string>('')
        })
  }
}
