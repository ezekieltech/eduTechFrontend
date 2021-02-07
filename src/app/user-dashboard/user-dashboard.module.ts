import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserDashboardRoutingModule } from './user-dashboard-routing.module';
import { UserComponent } from './user/user.component';


@NgModule({
  declarations: [UserComponent],
  imports: [
    CommonModule,
    UserDashboardRoutingModule
  ]
})
export class UserDashboardModule { }
