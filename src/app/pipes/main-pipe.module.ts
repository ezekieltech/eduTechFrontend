import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";

import { SplitFirstPipe } from "./split-first.pipe";
import { CountArrayPipe } from './count-array.pipe';
import { BooksOnLoanPipe} from './books-on-loan.pipe';
import { BooksAvailablePipe } from './books-available.pipe'

@NgModule({
  declarations:[SplitFirstPipe, CountArrayPipe, BooksOnLoanPipe, BooksAvailablePipe],
  imports:[CommonModule],
  exports:[SplitFirstPipe, CountArrayPipe, BooksOnLoanPipe, BooksAvailablePipe]
})

export class MainPipe{}
