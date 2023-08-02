import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Fruits } from './fruits';

@Injectable({
  providedIn: 'root'
})
export class FruitsService {

  apiUrl: string = 'http://localhost:3000/'

  constructor(private http: HttpClient) { }

  getAll(resource: string) {
    return this.http.get<Fruits[]>(this.apiUrl + resource)
  }

  create(resource: string, payload: Fruits) {
    return this.http.post<Fruits>(this.apiUrl + resource, payload)
  }

}
