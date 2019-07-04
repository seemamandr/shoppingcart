import { Injectable } from '@angular/core';
import {HttpClientModule, HttpClient} from '@angular/common/http';

import { map, catchError } from 'rxjs/operators';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RestapiService {
  public BASE_API = 'https://api.myjson.com/bins/qhnfp';

  constructor(private http: HttpClient) { }

  public doCart() {
    const url = this.BASE_API;
    return this.http.get(url);
  }
}
