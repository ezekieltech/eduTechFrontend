import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { ProfileComponent } from './profile/profile.component';
import { UserComponent } from './user/user.component';
import { ProfileResolverService } from './profile-resolver.service'
import { DisplayProfileComponent } from './profile/display-profile/display-profile.component';
import { UserProfileComponent } from './profile/user-profile.component';


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
              children: [
                {path: '', component: UserProfileComponent}


              ]
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
