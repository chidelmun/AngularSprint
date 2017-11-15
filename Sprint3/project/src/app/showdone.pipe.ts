import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'showdone'
})
export class ShowdonePipe implements PipeTransform {

  transform(todos, showdone: boolean): any {
    return  !showdone ? todos : todos.filter(function(todo){
            return todo.done == true;
    });
  }

}
