import { Component, OnInit } from '@angular/core';
import { faLock, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';

import { NgForm } from '@angular/forms';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

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
    private router: Router) { }

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
  signupUrl: string = "http://127.0.0.1:8000/users/"
  url: string = "http://127.0.0.1:8000/auth/jwt/create/"


  login(loginForm: NgForm){
    if (loginForm && loginForm.valid) {
      const userName = loginForm.form.value.userName;
      const password = loginForm.form.value.password;
      console.log(loginForm.value)
      this.appService.login(this.url,loginForm.value).subscribe(
        response => {
          console.log(response)
          this.appService.tokens = response.access
          this.router.navigate(['/welcome/teacher', [queryParams]="{filterBy: 'x', showImage: true}"]);
        }
      )
      // this.authService.login(userName, password);

      // Navigate to the Product List page after log in.
      // if (this.authService.redirectUrl) {
      //   this.router.navigateByUrl(this.authService.redirectUrl);
      // } else {
      //   this.router.navigate(['/products']);
      // }
    } else {
      // this.errorMessage = 'Please enter a user name and password.';
      console.log('Enter Valid Email and Password')
    }
  }

  signup(signupForm: NgForm){
    if (signupForm && signupForm.valid) {
      const username = signupForm.form.value.userName;
      const email = signupForm.form.value.email;
      const password = signupForm.form.value.password;
      const password2 = signupForm.form.value.password2;
      console.log(signupForm.value)
      this.appService.signup(this.signupUrl,signupForm.value).subscribe(
        response => {
          console.log(response, response.headers)
          this.email = response.email
          this.username = response.username
          this.appService.tokens = response.tokens
          // console.log(this.email, this.username, this.tokens)
          // http://localhost:4200/welcome/teacher
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
