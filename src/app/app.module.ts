import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { NavComponent } from './user-dashboard/nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { ProfileComponent } from './user-dashboard/profile/profile.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { UserDashboardRoutingModule } from './user-dashboard/user-dashboard-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    NavComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    UserDashboardRoutingModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
