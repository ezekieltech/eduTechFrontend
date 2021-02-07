import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { AppService } from 'src/app/app.service';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  /** Based on the screen size, switch from standard to one column per row */

  profile_token: string;
  url: string = 'http://127.0.0.1:8000/auth/users/me';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      Authorization: 'my-auth-token'
    })
  };

  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'About Me', cols: 2, rows: 1 },
          { title: 'My Courses', cols: 2, rows: 1 },
          { title: 'Courses', cols: 2, rows: 1 },
          { title: 'Mentors', cols: 2, rows: 1 }
        ];
      }

      return [
        { title: 'About Me', cols: 2, rows: 1 },
        { title: 'My Courses', cols: 1, rows: 1 },
        { title: 'Courses', cols: 1, rows: 2 },
        { title: 'Mentors', cols: 1, rows: 1 }
      ];
    })
  );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private appService: AppService,
    ) {}

  ngOnInit (){
    this.appService.getUser(this.url).subscribe(
      response => console.log(response)
    )
  }

}
