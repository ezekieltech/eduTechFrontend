import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'splitFirst'
})
export class SplitFirstPipe implements PipeTransform {

  transform(text: string, by: string, index: number = 0) {
    let arr = text.split(by)
    return arr[index];
  }

}
