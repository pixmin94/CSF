import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { Order } from "./models";
import { firstValueFrom } from "rxjs";

@Injectable()
export class OrderService {
  constructor(private http: HttpClient) { }

  submitOrder(order: Order): Promise<any> {
    //maybe need to convert to json??
    return firstValueFrom(
      this.http.post<any>('/api/order' , JSON.stringify(order))
    )
  }
}
