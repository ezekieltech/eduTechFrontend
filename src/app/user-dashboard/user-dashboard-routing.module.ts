import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { ProfileComponent } from './profile/profile.component';
import { UserComponent } from './user/user.component';


const routes: Routes = [
  {
    path: 'welcome',

    children: [
      {
        path: '',
        component: NavComponent,
        children: [

            {
              path: 'teacher',
              component: ProfileComponent,
            },
            {
              path: 'student',
              component: ProfileComponent,
            },
          ]


      },
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserDashboardRoutingModule { }
