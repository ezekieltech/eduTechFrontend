import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { apiEndpoints } from 'src/app/api-endpoints';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {

  url: string;
  lectureIsSelected: boolean = false

  course;
  course_name: string;
  course_lectures: [];
  teacher: [];
  consultant: [];
  course_short_descrition: string;
  eachLectureId;

  constructor(
    private route: ActivatedRoute,
    private appService: AppService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.url = apiEndpoints.coursesUrl + id + '/';
    this.appService.getCourses(this.url).subscribe(
      response => {this.course = response;  console.log(this.course)});

  }

  showLectureFiles(){
    this.lectureIsSelected = true;
    // this.router.navigate(['lectures'], { relativeTo: this.route })
  }

}
