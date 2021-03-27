import { Component, OnInit } from '@angular/core';
import { faLock, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';

import { NgForm } from '@angular/forms';
import { AppService } from '../app.service';
import { Router } from '@angular/router';
import { apiEndpoints } from '../api-endpoints'

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  public pageTitle = 'Welcome';
  title = 'edutechfrontend';
  faLock = faLock;
  faUser = faUser;
  faEnvelope = faEnvelope;
  email: string;
  username: string;
  tokens: string;
  newUserUsername: string;

  signModeChanged: boolean;
  justSignedUp: boolean;

  constructor(
    private appService: AppService,
    private router: Router,

    ) { }

  ngOnInit(): void {
  }

  addSignUpMode() {
    this.signModeChanged = true;
  }

  addSignInMode() {
    this.signModeChanged = false;
  }

  signupUrl: string = apiEndpoints.signupUrl
  url: string = apiEndpoints.loginUrl


  login(loginForm: NgForm){
    if (loginForm && loginForm.valid) {
      console.log('loginForm.value');
      this.appService.login(this.url,loginForm.value).subscribe(
        response => {
          localStorage.setItem('id_token', response.access);
          this.router.navigate(['/profile']);
        }
      )
    } else {
      console.log('Enter Valid Email and Password')
    }
  }

  signup(signupForm: NgForm){
    if (signupForm && signupForm.valid) {
      console.log('from sign up page:', JSON.stringify(signupForm.value))

      this.appService.signup(this.signupUrl,signupForm.value).subscribe(
        response => {
          this.newUserUsername = response.username;
          this.justSignedUp = true;
          this.addSignInMode();
        }
      )
    } else {
      console.log('Enter Valid Email and Password at signup')
    }
  }

}
