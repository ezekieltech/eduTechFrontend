import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module'

import { UserDashboardRoutingModule } from './user-dashboard-routing.module';

import { UserComponent } from './user/user.component';
import { NavComponent } from './nav/nav.component'
import { ProfileComponent } from './profile/profile.component';
import { DisplayProfileComponent } from './profile/display-profile/display-profile.component';
import { UserProfileComponent } from './profile/user-profile.component';


@NgModule({
  declarations: [
    NavComponent,
    ProfileComponent,
    UserComponent,
    DisplayProfileComponent,
    UserProfileComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    UserDashboardRoutingModule
  ]
})
export class UserDashboardModule { }
