import { Component, Input, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

import { apiEndpoints } from '../../api-endpoints'

@Component({
  selector: 'app-user-courses',
  templateUrl: './user-courses.component.html',
  styleUrls: ['./user-courses.component.css']
})
export class UserCoursesComponent implements OnInit {

  courses: [] = []
  @Input() userId;
  url: string;

  constructor(
    private appService: AppService,
  ) { }

  ngOnInit(): void {
    this.url = apiEndpoints.userDetailUrl + this.userId
    console.log(this.url)
    this.appService.getUser(this.url).subscribe(
      response => {
        if (response['profile_mentor']){
          this.courses = response['profile_mentor']['course_creator'];
        }
        if (response['profile_mentee']){
          this.courses = response['profile_mentee']['classcourse_mentee'];
        }

      }
      )
  }

  showInfo(course){
    console.log(course.split(',')[1]);
    const id = course.split(',')[1];
    this.url = apiEndpoints.coursesUrl + id;
    this.appService.getCourses(this.url).subscribe( response => console.log(response));
  }

}
