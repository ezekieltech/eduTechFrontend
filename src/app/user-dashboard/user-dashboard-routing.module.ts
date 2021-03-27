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
import { CourseLecturesComponent } from './courses/course-lectures.component';
import { LectureDetailComponent } from './courses/lecture-detail.component';
import { UserCoursesComponent } from './profile/user-courses.component';
import { UserBooksComponent } from './profile/user-books.component';


const routes: Routes = [
  {
    path: 'profile',
    component: NavComponent,
    children: [
        {
          path: '',
          component: ProfileComponent,
          children: [
            {path: '', component: UserProfileComponent},
            {path: '', component: UserCoursesComponent},
            {path: '', component: UserBooksComponent},
          ]
        },
        {
          path: 'courses',
          component: CoursesComponent,
        },
        {
          path: 'courses/:id',
          component: CourseDetailComponent,
          children: [
            {
              path: 'lectures',
              component: CourseLecturesComponent},
                {
                  path: 'lectures/:id',
                  component: LectureDetailComponent,
                }


          ]
        }

      ],

  },
];

@NgModule({
  imports: [RouterModule.forChild(routes),],
  exports: [RouterModule]
})
export class UserDashboardRoutingModule { }
