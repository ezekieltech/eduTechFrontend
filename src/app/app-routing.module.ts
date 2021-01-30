import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './home/welcome.component';
import { NavComponent } from './nav/nav.component'
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [
  {path: 'user', component: ProfileComponent},
  {path: 'welcome', component: NavComponent},
  {path: 'home', component: WelcomeComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'welcome', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
