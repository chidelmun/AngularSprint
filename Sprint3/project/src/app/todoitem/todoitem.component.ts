import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute,Router}  from '@angular/router';
import {TodosService}  from '../todos.service';

@Component({
  selector: 'app-todoitem',
  templateUrl: './todoitem.component.html',
  styleUrls: ['./todoitem.component.css'],
  providers:[TodosService]
})
export class TodoitemComponent implements OnInit {
  @Input() title: string;
  @Input() selectedItem: number = 0;
  item: {'id': number, 'title': string, 'description': string, 'due': string, 'done': boolean};

  constructor(public router: ActivatedRoute, private route: Router, private todoServ: TodosService) { }

  ngOnInit() {
    let index = this.router.snapshot.params['index'];
    //alert(index);

    this.todoServ.getTodoItem(index).subscribe(
      data =>{
        //alert(data.json().id);
        this.item = data.json();
      },error=>{

      }
    );

  }

  deleteTodo(){
    let index = this.router.snapshot.params['index'];
    this.todoServ.deleteTodoItem(index).subscribe(
      data => {

          this.route.navigate(['list']);
      }
    );
  }

  updateTodoItem(){
      this.todoServ.updateTodoItem(this.item).subscribe(
        data=>{
          let destination = 'list';
          this.route.navigate([destination]);
        }
      )
  }

}
