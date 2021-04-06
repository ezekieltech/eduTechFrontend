import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'booksOnLoan'
})
export class BooksOnLoanPipe implements PipeTransform {

  transform(arr: [],) {
    const booksOnLoan = [];
    arr.forEach(
      function(item: any){
        if (item.status === 'a'){booksOnLoan.push(item)};
      }
    )
    return booksOnLoan.length;
  }
}
