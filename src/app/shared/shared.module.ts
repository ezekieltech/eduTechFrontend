
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
// import { MatMomentDateModule } from "@angular/material-moment-adapter";

@NgModule({
 imports: [
   FormsModule,
   MatTableModule,
   MatButtonModule,
   LayoutModule,
   MatToolbarModule,
   MatSidenavModule,
   MatIconModule,
   MatListModule,
   MatGridListModule,
   MatCardModule,
   MatMenuModule,
   MatExpansionModule,
   MatFormFieldModule,
   MatDatepickerModule,
   MatNativeDateModule,
   MatInputModule,

  BrowserModule,
   BrowserAnimationsModule,

  ],
 declarations: [
 ],
 exports: [
  FormsModule,
  BrowserAnimationsModule,
  MatButtonModule,
  LayoutModule,
  MatToolbarModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatGridListModule,
  MatCardModule,
  MatMenuModule,
  MatTableModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatInputModule,
  // MatMomentDateModule,
]
})
export class SharedModule { }
