import { Component, Input, OnInit } from '@angular/core';
import { apiEndpoints } from 'src/app/api-endpoints';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-user-books',
  templateUrl: './user-books.component.html',
  styleUrls: ['./user-books.component.css']
})
export class UserBooksComponent implements OnInit {

  @Input() userId;
  books: [] = [];
  url: string;
  courseId: string;

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.url = apiEndpoints.userDetailUrl + this.userId + '/'
    console.log(this.url)

    this.appService.getUser(this.url).subscribe(
      response => {
        if (response['profile_mentor']){
          this.books = response['books_borrowed'];
          this.courseId = response['pk'];
        }
        if (response['profile_mentee']){
          this.books = response['books_borrowed'];
        }

      }
    )
  }

  showInfo(book){
    console.log(book.split(',')[1]);
    console.log(this.courseId);
    const id = book.split(',')[1];
    this.url = apiEndpoints.booksUrl + id + '/';
    this.appService.getCourses(this.url).subscribe( response => console.log(response));
  }

}
