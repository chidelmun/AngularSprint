import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class TodosService {

  constructor(private http: Http) { }

  getAllItems(){
    return this.http.get('assets/todo.json');
  }

}
