import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { ProfileComponent } from './profile/profile.component';
import { UserComponent } from './user/user.component';
import { ProfileResolverService } from './profile-resolver.service'


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
              // resolve: {
              //   ProfileResolverService
              // }
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
