import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { apiEndpoints } from '../../api-endpoints'

@Component({
  selector: 'app-course-lectures',
  templateUrl: './course-lectures.component.html',
  styleUrls: ['./course-lectures.component.css']
})
export class CourseLecturesComponent implements OnInit {

  step: number = 0;
  lectureUrl: string;
  lectureFilesId;

  @Input() lectures;

  constructor(
    private appService: AppService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
  }

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  getLecture(lecture){
    const id = lecture.split(',')[1]
    console.log('from course-lectures', id)
    this.lectureUrl = apiEndpoints.lecturesUrl + id + '/';
    this.appService.getCourses(this.lectureUrl).subscribe(
      response => {
        const files_of_ClassCourseLectures =response.files_of_ClassCourseLectures[0];
        this.lectureFilesId = files_of_ClassCourseLectures.split(',')[2];
        console.log('lecture filed id', this.lectureFilesId);
        this.router.navigate(['lectures/' + this.lectureFilesId],{ relativeTo: this.route })

      }
    )

  }

}
