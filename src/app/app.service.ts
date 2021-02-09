import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { GetTokensService } from './get-tokens.service';

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

  constructor(public httpClient: HttpClient, private getTokens: GetTokensService) { }

  setTokenAuthorization (){
    this.curent_token = 'JWT ' + this.getTokens.data.access;
    this.httpOptions.headers = this.httpOptions.headers.set('Authorization', this.curent_token);
  }

  signup (url:string, formValue: JSON): Observable<any> {
    return this.httpClient.post(url, formValue, this.httpOptions)
  }

  login(url:string, formValue: JSON): Observable<any> {
    return this.httpClient.post(url, formValue, this.httpOptions)
  }

  getUser (url: string): Observable<any> {
    this.setTokenAuthorization()
    return this.httpClient.get(url, this.httpOptions)
  }

  getCourses(): Observable<any>{
    this.setTokenAuthorization()
    return this.httpClient.get("https://mysterious-castle-94559.herokuapp.com/users/")
  }
}
