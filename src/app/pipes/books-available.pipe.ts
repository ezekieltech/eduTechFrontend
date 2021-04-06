import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'booksAvailable'
})
export class BooksAvailablePipe implements PipeTransform {

  transform(arr: [],) {
    const booksAvailable = [];
    arr.forEach(
      function(item: any){
        if (item.status === 'a'){booksAvailable.push(item)};
      }
    )
    return booksAvailable.length;
  }

}
