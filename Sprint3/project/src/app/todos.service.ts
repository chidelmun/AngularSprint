import { Injectable } from '@angular/core';
import {Http, HttpModule, Headers, RequestOptions} from '@angular/http';

@Injectable()
export class TodosService {

  constructor(private http: Http) { }

  getAllTodoItems(){
    return this.http.get('http://localhost:3010/todos');
  }

  getTodoItem(id:number){
    return this.http.get(`http://localhost:3010/todos/${id}`);
  }

  deleteTodoItem(id: number){

      return this.http.delete(`http://localhost:3010/todos/${id}`);

  }

  addTodoItem(){
      
  }

  updateTodoItem(todoItem: any){
    const body = JSON.stringify(todoItem);
    console.log('updateTodo body: ' + body);
    const headers = new Headers( {'Content-Type' : 'application/json' } );
    const opts = new RequestOptions();
    opts.headers = headers;
    let id = todoItem.id;
    const url = `http://localhost:3010/todos/${id}`;
    //alert(url);
    return this.http.put(url, body, opts);
  }

}
