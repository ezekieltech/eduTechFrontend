import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { apiEndpoints } from 'src/app/api-endpoints';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  url: string;
  bookInstance;

  constructor(
    private route: ActivatedRoute,
    private appService: AppService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.url = apiEndpoints.booksActualUrl + id + '/';
    this.appService.getCourses(this.url).subscribe(
      response => {this.bookInstance = response;  console.log(this.bookInstance)});
  }

}
