import { Component, OnInit } from '@angular/core';
import { faLock, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';

import { NgForm } from '@angular/forms';
import { AppService } from '../app.service';
import { Router } from '@angular/router';
// import { GetTokensService } from '../get-tokens.service';
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

  signModeChanged: boolean;

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

  // url: string = "https://mysterious-castle-94559.herokuapp.com/auth/jwt/create/"
  // signupUrl: string = "https://mysterious-castle-94559.herokuapp.com/users/"
  signupUrl: string = apiEndpoints.signupUrl
  url: string = apiEndpoints.loginUrl


  login(loginForm: NgForm){
    if (loginForm && loginForm.valid) {
      this.appService.login(this.url,loginForm.value).subscribe(
        response => {
          localStorage.setItem('id_token', response.access);
          this.router.navigate(['/welcome/teacher']);
        }
      )
    } else {
      console.log('Enter Valid Email and Password')
    }
  }

  signup(signupForm: NgForm){
    if (signupForm && signupForm.valid) {
      this.appService.signup(this.signupUrl,signupForm.value).subscribe(
        response => {
          console.log(response, response.headers)
          this.email = response.email
          this.username = response.username
        }
      )

      this.router.navigate(['/welcome']);
      // this.authService.login(userName, password);

      // Navigate to the Product List page after log in.
      // if (this.authService.redirectUrl) {
      //   this.router.navigateByUrl(this.authService.redirectUrl);
      // } else {
      //   this.router.navigate(['/products']);
      // }
    } else {
      // this.errorMessage = 'Please enter a user name and password.';
      console.log('Enter Valid Email and Password at signup')
    }
  }

}
