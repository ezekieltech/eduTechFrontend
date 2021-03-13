import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  constructor(
    private route: ActivatedRoute,
    private appService: AppService,
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log('id',id)
    this.url = apiEndpoints.coursesUrl + id;
    this.appService.getCourses(this.url).subscribe(
      response => {this.course = response;  console.log(this.course)});

  }

  showLectureFiles(){
    this.lectureIsSelected = true;
  }

}
