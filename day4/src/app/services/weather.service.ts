import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Weather } from '../models/weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  url: string = 'https://api.openweathermap.org/data/2.5/weather'

  constructor(private httpClient: HttpClient) { }

  getWeatherPromise(city: string, key: string): Promise<any> {
    const params = new HttpParams()
      .set('q', city)
      .set('appid', key)

    return (lastValueFrom(this.httpClient.get<Weather>(
      this.url, {params}
    )))
  }

}
