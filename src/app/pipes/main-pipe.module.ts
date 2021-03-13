import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";

import { SplitFirstPipe } from "./split-first.pipe";
import { CountArrayPipe } from './count-array.pipe';

@NgModule({
  declarations:[SplitFirstPipe, CountArrayPipe],
  imports:[CommonModule],
  exports:[SplitFirstPipe, CountArrayPipe]
})

export class MainPipe{}
