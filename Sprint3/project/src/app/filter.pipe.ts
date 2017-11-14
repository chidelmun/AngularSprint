import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterbytext'
})
export class FilterPipe implements PipeTransform {

  transform(todoItems, searchText:string) {
    return !searchText ? todoItems : todoItems.filter(function(todo){
         return todo.title.includes(searchText) || todo.description.includes(searchText);
    });
  }

}
