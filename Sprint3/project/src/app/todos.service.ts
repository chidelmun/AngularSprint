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

}
