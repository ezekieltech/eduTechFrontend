import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";

import {SplitFirstPipe} from "./split-first.pipe";

@NgModule({
  declarations:[SplitFirstPipe],
  imports:[CommonModule],
  exports:[SplitFirstPipe]
})

export class MainPipe{}
