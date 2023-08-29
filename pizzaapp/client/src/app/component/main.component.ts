import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  form!: FormGroup

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.createForm()
  }

  submitOrder() {
    console.log("hi")
  }

  createForm() {
    return this.fb.group({
          name: this.fb.control<string>('', [ Validators.required, Validators.minLength(3) ]),
          email: this.fb.control<string>('', [ Validators.required, Validators.email]),
          size: this.fb.control<number>(NaN, [Validators.required]),
          // base: this.fb.control<string>('', [Validators.required]),
          comments: this.fb.control<string>('')
        })
  }
}
