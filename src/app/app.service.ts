import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {


  curent_token: string = 'JWT ';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      Authorization: this.curent_token
    })
  };

  constructor(public httpClient: HttpClient) { }

  signup (url:string, formValue: JSON): Observable<any> {
    return this.httpClient.post(url, formValue, this.httpOptions)
  }

  login(url:string, formValue: JSON): Observable<any> {
    return this.httpClient.post(url, formValue, this.httpOptions)
  }

  getUser (url: string): Observable<any> {
    return this.httpClient.get(url, this.httpOptions)
  }

  getCourses(url: string): Observable<any>{
    return this.httpClient.get(url, this.httpOptions)
  }
}
