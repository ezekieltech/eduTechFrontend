import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { ProfileComponent } from './profile/profile.component';
import { UserComponent } from './user/user.component';
import { ProfileResolverService } from './profile-resolver.service'
import { DisplayProfileComponent } from './profile/display-profile/display-profile.component';
import { UserProfileComponent } from './profile/user-profile.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseDetailComponent } from './courses/course-detail.component';


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
              children: [
                {path: '', component: UserProfileComponent},
              ]
            },
            {
              path: 'student',
              component: ProfileComponent,
            },
            {
              path: 'courses',
              component: CoursesComponent,
              // children: [
              //   {
              //     path: 'courses:id',
              //     component: CourseDetailComponent,
              //   }
              // ]
            },
            {
              path: 'courses/:id',
              component: CourseDetailComponent,
            }

          ],

      },
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),],
  exports: [RouterModule]
})
export class UserDashboardRoutingModule { }
