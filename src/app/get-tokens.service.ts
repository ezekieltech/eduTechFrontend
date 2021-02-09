import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetTokensService {

  tokens: any[];

  constructor() { }

   get data(): any{
    return this.tokens;
  }

  set data(val: any){
    this.tokens = val;
    console.log('from get token service', this.tokens);
  }
}
