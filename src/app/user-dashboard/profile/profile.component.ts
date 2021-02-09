import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { AppService } from 'src/app/app.service';
import { HttpHeaders } from '@angular/common/http';
import { GetTokensService } from 'src/app/get-tokens.service';
import { Observable } from 'rxjs';
import { apiEndpoints } from '../../api-endpoints'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  /** Based on the screen size, switch from standard to one column per row */

  url: string;
  profile_email: string;
  user_id: string;

  cards = [];

  setCardGridForHandset = {cols: 2, rows: 1};
  setCardGridForWeb = {cols: 2, rows: 1};

  cardsForHandset = [];

  cardsForWeb = [];


  isHandset:boolean = false;
  isHandsetObserver: Observable<boolean>= this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return true;
      }

      return false;
    })
  );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private appService: AppService,
    public getTokens: GetTokensService
    ) {}

  ngOnInit ( ){
    this.isHandsetObserver.subscribe(currentObserver => {
      this.isHandset = currentObserver;
      this.loadCards()
    })
    this.user_id = this.defineUserProfileCard()
   }

   loadCards(){
     this.cards = this.isHandset ? this.cardsForHandset : this.cardsForWeb;
   }


   defineUserProfileCard(){
    this.url = apiEndpoints.loginUrl
    this.appService.getUser(this.url).subscribe(
      response => {
        const userCard = {};
        userCard['title'] = response.username;
        this.user_id = response.id
        this.cardsForWeb[this.cardsForWeb.length] = {...userCard, ...this.setCardGridForWeb}
        this.cardsForHandset[this.cardsForWeb.length] = {...userCard, ...this.setCardGridForHandset}
      },
      error => {

      }
    )
    return this.user_id
   }

  getUserProfile (id){
    this.url = apiEndpoints.userProfileUrl + this.user_id
    this.appService.getUser(this.url).subscribe( response => console.log(response))
  }


}
