import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { FilterPipe } from '../filter.pipe';
import {ShowdonePipe} from  '../showdone.pipe';
import {TodosService} from '../todos.service';
@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css'],
  providers:[FilterPipe, TodosService, ShowdonePipe]
})
export class TodolistComponent implements OnInit {
  @Input() title: string = 'ToDo List';
  @Output() selected = new EventEmitter();


  todolist: { 'id': number, 'title': string, 'description': string, 'due': string, 'done': boolean }[];

  constructor(private todoSvc: TodosService) {}

  ngOnInit() {
    this.todoSvc.getAllTodoItems().subscribe(
      data => {
        this.todolist = data.json();
      },
      error => {
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

   showDone : boolean = false;

   toggleShowDone(){
     this.showDone = !this.showDone;
   }

}
