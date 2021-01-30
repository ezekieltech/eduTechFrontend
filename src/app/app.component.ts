import { Component } from '@angular/core';
import { faLock, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'edutechfrontend';
  faLock = faLock;
  faUser = faUser;
  faEnvelope = faEnvelope;

  signModeChanged: boolean;

  addSignUpMode() {
    this.signModeChanged = true;
  }

  addSignInMode() {
    this.signModeChanged = false;
  }
}
