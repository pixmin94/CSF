import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable } from "rxjs";

const URL = 'http://localhost:8080/api/search'
@Injectable()
export class SearchService {
  // private http = inject(HttpClient)

  constructor(private http: HttpClient) { }

  search(q: string): Observable<string[]> {
    const params = new HttpParams().set('q', q)
    return this.http.get<string[]>(URL, { params })
  }

}
