import {RouterModule, Routes} from '@angular/router';

import {TodoitemComponent} from './todoitem/todoitem.component';
import {TodolistComponent} from './todolist/todolist.component';

const routes : Routes = [
  {path: 'list', component: TodolistComponent},
  {path: 'item', component:TodoitemComponent},
  {path: 'item/:index', component:TodoitemComponent}
];

export const routing = [RouterModule.forRoot(routes)];
