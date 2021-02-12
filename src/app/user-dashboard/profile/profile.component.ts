import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { AppService } from 'src/app/app.service';
import { Observable } from 'rxjs';
import { apiEndpoints } from '../../api-endpoints'
import { GetUserIdService } from 'src/app/get-userID.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  /** Based on the screen size, switch from standard to one column per row */

  url: string;
  profile_email: string;
  username: string;
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
    private getUserId: GetUserIdService,
    ) {}

  ngOnInit ( ){
    this.isHandsetObserver.subscribe(currentObserver => {
      this.isHandset = currentObserver;
      this.loadCards()
    })
    this.defineUserProfileCard()
   }

   loadCards(){
     this.cards = this.isHandset ? this.cardsForHandset : this.cardsForWeb;
   }


   defineUserProfileCard(){
    this.url = apiEndpoints.userMeUrl
    this.appService.getUser(this.url).subscribe(
      response => {
        const userCard = {};
        userCard['title'] = 'userProfile';
        userCard['username'] = response.username;
        userCard['email'] = response.email;
        this.user_id = response.id;
        this.profile_email = response.email;
        this.username = response.username;
        this.getUserId.data = response.id;
        this.cardsForWeb[this.cardsForWeb.length] = {...userCard, ...this.setCardGridForWeb};
        this.cardsForHandset[this.cardsForHandset.length] = {...userCard, ...this.setCardGridForHandset};
      },
      error => {

      }
    )
   }

  getUserProfile (id){
    this.url = apiEndpoints.userDetailUrl + this.user_id
    this.appService.getUser(this.url).subscribe( response => console.log(response))
  }


}
