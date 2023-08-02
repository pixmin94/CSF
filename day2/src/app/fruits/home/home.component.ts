import { FruitsService } from './../fruits.service';
import { Component } from '@angular/core';
import { Fruits } from '../fruits';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  allFruits: Fruits[] = [];

  constructor(private fruitsService: FruitsService) { }

  ngOnInit() : void {
    this.fruitsService.getAll('fruits').subscribe( (data) => {
      this.allFruits = data;
    })
  }

}
