import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetUserIdService {

  userId: any[];

  constructor() { }

   get data(): any{
    return this.userId;
  }

  set data(val: any){
    this.userId = val;
  }
}
