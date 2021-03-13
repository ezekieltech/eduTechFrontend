import { Injectable } from '@angular/core';
import {

  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of} from 'rxjs';
import { mergeMap, take } from 'rxjs/operators';


import { AppService } from '../app.service';


@Injectable({
  providedIn: 'root'
})
export class ProfileResolverService implements Resolve<any>{

  url: string;

  constructor(
    private appService: AppService,
    private router: Router,
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
  Observable<any> | Observable<never> {

    const id = route.paramMap.get('id');

    if (isNaN(+id)) {
      const message = `Profile,${id}, may not exist`;
      console.error(message);
      return of({ profile: null, error: message });
    }

    return   this.appService.getUser(this.url).pipe(
      take(1),
      mergeMap(profile =>{
        if (profile){
          return of (profile);
        } else {
          this.router.navigate(['/welcome'])
        }
      })
    )

  }
}
