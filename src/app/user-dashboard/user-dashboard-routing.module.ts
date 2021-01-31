import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [
  {
    path: 'welcome',
    component: NavComponent,
    children: [
      {path: '', component: ProfileComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserDashboardRoutingModule { }
