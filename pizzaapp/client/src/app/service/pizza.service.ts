import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { firstValueFrom, Observable } from "rxjs";
import { Order } from "../models";

@Injectable()
export class PizzaService {
  constructor(private http: HttpClient) { }

  createOrder(order: Order): Promise<any> {
    // console.log(order)
    // const order: Order = {
    //   name: 'sdfg',
    //   email: '',
    //   size: 12,
    //   comments: 'sdfg'
    // };
    return firstValueFrom(
      this.http.post<Order>('/api/order', order)
    ).then(result => console.log(result))
    // .catch(error => console.log(error))

    // try {
    //   const result = await firstValueFrom(
    //     this.http.post<any>('/api/order', order)
    //   )
    //   console.log(result)
    //   return result
    // } catch (error) {
    //   console.log(error)
    //   throw error
    // }


  }

  // createOrder(order: Order): Observable<any> {
  //   console.log(order)
  //   return this.http.post<any>('/api/order', order)
  // }

}
