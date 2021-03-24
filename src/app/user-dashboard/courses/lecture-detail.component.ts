// import { Component, Input, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { apiEndpoints } from '../../api-endpoints';
import { DomSanitizer } from '@angular/platform-browser'

// @Component({
//   selector: 'app-lecture-detail',
//   templateUrl: './lecture-detail.component.html',
//   styleUrls: ['./lecture-detail.component.css']
// })
// export class LectureDetailComponent implements OnInit {

//   @Input() lectureId;
//   lectureFilesUrl: string;
//   lecturefile;

//   constructor(
//     private appService: AppService,
//   ) { }

//   ngOnInit(): void {
//     this.lectureFilesUrl = apiEndpoints.lectureFilesUrl + this.lectureId
//     this.appService.getCourses(this.lectureFilesUrl).subscribe(
//       response => {this.lecturefile = response}
//     )
//   }

// }

import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {Observable, Observer} from 'rxjs';

export interface ExampleTab {
  label: string;
  content: string;
}

/**
 * @title Tab group with asynchronously loading tab contents
 */
@Component({
  selector: 'app-lecture-detail',
  templateUrl: './lecture-detail.component.html',
  styleUrls: ['./lecture-detail.component.css']
})
export class LectureDetailComponent implements OnInit {
  asyncTabs: Observable<ExampleTab[]>;

  @Input() lectureId;
  lectureFilesUrl: string;
  lecturefile;
  video_file;
  document_file;
  text_content;
  test;

  constructor(
    private appService: AppService,
    private domSanitizer: DomSanitizer,
  ) { }

  ngOnInit(): void {
    this.lectureFilesUrl = apiEndpoints.lectureFilesUrl + '1' + '/';
    this.test= `<p>ok</p>`;

    this.appService.getCourses(this.lectureFilesUrl).subscribe(
      (response) => {
        this.lecturefile = response;
        console.log(response);
        this.video_file = this.lecturefile.video_file;
        this.document_file = this.lecturefile.document_file;
        this.text_content = this.lecturefile.text_content;

        console.log('video_file', this.video_file);
        console.log('document_file', this.document_file);
        console.log('text_content', this.text_content);

        this.test= `
        <video width="320" height="240" controls>
          <source src="${this.video_file}" type="mp4">
          <!-- <source src="movie.ogg" type="video/ogg"> -->
        Your browser does not support the video tag.
        </video>
        `;


        this.asyncTabs = new Observable((observer: Observer<ExampleTab[]>) => {
          setTimeout(() => {
            observer.next([
              {label: 'First', content: this.video_file},
              {label: 'Second', content: this.text_content},
              {label: 'Third', content: this.document_file},
            ]);
          }, 1000);
        });
      }
    )
  }
  getVideoTag(file) {
    return this.domSanitizer.bypassSecurityTrustHtml(
      `<video width="320" height="240" autoplay muted controls id="myVideo">
          <source src="${file}" type="video/mp4">No HTML5 supported.</source>
       </video>`
    );
  }

  getDocumentTag(document_file){
    return this.domSanitizer.bypassSecurityTrustHtml(
      `<iframe  width="800px" height="2100px" src="${document_file}"/></iframe>`
    )
  }



}

