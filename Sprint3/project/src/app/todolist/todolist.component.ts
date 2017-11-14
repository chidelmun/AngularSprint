import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { FilterPipe } from '../filter.pipe';
import {TodosService} from '../todos.service';
@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css'],
  providers:[FilterPipe, TodosService]
})
export class TodolistComponent implements OnInit {
  @Input() title: string = 'ToDo List';
  @Output() selected = new EventEmitter();

  // tslint:disable:max-line-length
  todolist:{ 'id': number, 'title': string, 'description': string, 'due': string, 'done': boolean }[];

   constructor(public todosServ: TodosService) {

    }

   ngOnInit() {
     this.todosServ.getAllTodoItems().subscribe(function(data){
        //alert(data.json()[10].title);
        this.todolist = data.json();

     }, function(error){
          alert("Sorry error occured");
     });
   }

   onClick(param) {
     console.log('list onclick: ' + param );
     //alert(param);
     this.selected.emit(param);
   }

   allowFilter: boolean = false;
   searchText: string;
   toggleMode(){
     this.allowFilter = !this.allowFilter;
   }

}
