import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module'
import { MainPipe } from '../pipes/main-pipe.module'

import { UserDashboardRoutingModule } from './user-dashboard-routing.module';

import { UserComponent } from './user/user.component';
import { NavComponent } from './nav/nav.component'
import { ProfileComponent } from './profile/profile.component';
import { DisplayProfileComponent } from './profile/display-profile/display-profile.component';
import { UserProfileComponent } from './profile/user-profile.component';
import { UserCoursesComponent } from './profile/user-courses.component';


@NgModule({
  declarations: [
    NavComponent,
    ProfileComponent,
    UserComponent,
    DisplayProfileComponent,
    UserProfileComponent,
    UserCoursesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    UserDashboardRoutingModule,
    MainPipe
  ]
})
export class UserDashboardModule { }
