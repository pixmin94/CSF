import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Weather } from '../models/weather';
import { Subscription } from 'rxjs';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit, OnDestroy {
  form!: FormGroup
  city!: string

  OPEN_WEATHER_API_KEY = "476e23fe1116f4e69d2a3e68672604e1"
  model = new Weather("",0,0,0,"",0,0)
  sub!: Subscription

  constructor(private fb: FormBuilder,
    private weatherSvc: WeatherService) { }


  ngOnInit(): void {
    this.form = this.createForm()
  }

  searchWeather() {
    console.log("search weather:")
    this.city = this.form.value["city"]
    console.log(this.city)
    this.weatherSvc.getWeatherPromise(this.city, this.OPEN_WEATHER_API_KEY)
      .then(result => {
        console.log(result)
        this.model = new Weather(
          this.city, result.main.temp,
          result.main.pressure,
          result.main.humidity,
          result.weather[0].description,
          result.wind.degree,
          result.wind.speed
        )
      }).catch(error => {
        console.log(error)
      })
  }

  private createForm(): FormGroup {
    return this.fb.group({city: this.fb.control<string>('', Validators.required)})
  }

  resetForm() {
    this.form = this.createForm()
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe()
  }
}
