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
  courses: [];

  cards = [];

  setCard1GridForHandset = {cols: 2, rows: 1};
  setCard2GridForHandset = {cols: 2, rows: 1};
  setCard3GridForHandset = {cols: 2, rows: 1};

  setCard1GridForWeb = {cols: 2, rows: 1};
  setCard2GridForWeb = {cols: 1, rows: 1};
  setCard3GridForWeb = {cols: 1, rows: 1};

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
        console.log(response)
        userCard['title'] = 'userProfile';
        userCard['username'] = response.username;
        userCard['email'] = response.email;
        userCard['courses'] =  response.courses
        this.user_id = response.id;
        this.profile_email = response.email;
        this.username = response.username;
        this.getUserId.data = response.id;
        this.cardsForWeb[this.cardsForWeb.length] = {...userCard, ...this.setCard1GridForWeb};
        this.cardsForHandset[this.cardsForHandset.length] = {...userCard, ...this.setCard1GridForHandset};

        const userCard2 = {};
        userCard2['title']='userCourses';
        // this.courses = response.profile_mentor;
        // console.log(response)
        // // userCard2['courses'] = response['profile_mentor']['course_creator'];
        this.cardsForWeb[this.cardsForWeb.length] = {...userCard2, ...this.setCard2GridForWeb};
        this.cardsForHandset[this.cardsForHandset.length] = {...userCard2, ...this.setCard2GridForHandset};

        const userCard3 = {};
        userCard3['title']='userBooks';
        // this.courses = response.profile_mentor;
        // console.log(response)
        // // userCard2['courses'] = response['profile_mentor']['course_creator'];
        this.cardsForWeb[this.cardsForWeb.length] = {...userCard3, ...this.setCard3GridForWeb};
        this.cardsForHandset[this.cardsForHandset.length] = {...userCard3, ...this.setCard3GridForHandset};
      },
      error => {

      }
    )
   }

  getUserProfile (id){
    this.url = apiEndpoints.userDetailUrl + this.user_id  + '/'
    this.appService.getUser(this.url).subscribe( response => console.log(response))
  }


}
