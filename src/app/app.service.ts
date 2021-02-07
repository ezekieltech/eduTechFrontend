import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  tokens: string = ''

  curent_token: string = 'JWT ' + this.tokens;


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


  getUser (url): Observable<any> {
    console.log('curent tokens:', this.curent_token)
    return this.httpClient.get(url, this.httpOptions)
  }

  getCourses(): Observable<any>{
    return this.httpClient.get("https://mysterious-castle-94559.herokuapp.com/users/")
  }
}
