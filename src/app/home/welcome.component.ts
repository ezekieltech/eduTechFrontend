import { Component, OnInit } from '@angular/core';
import { faLock, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';

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

  signModeChanged: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  addSignUpMode() {
    this.signModeChanged = true;
  }

  addSignInMode() {
    this.signModeChanged = false;
  }

}
