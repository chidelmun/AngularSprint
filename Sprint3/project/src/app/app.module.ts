import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {routing}  from './app.routes';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentsComponent } from './contents/contents.component';
import { NavlinksComponent } from './navlinks/navlinks.component';
import { TodolistComponent } from './todolist/todolist.component';
import { TodoitemComponent } from './todoitem/todoitem.component';
import {TodosService}     from './todos.service';
import { FilterPipe } from './filter.pipe';
import { ShowdonePipe } from './showdone.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    HeaderComponent,
    FooterComponent,
    ContentsComponent,
    NavlinksComponent,
    TodolistComponent,
    TodoitemComponent,
    FilterPipe,
    ShowdonePipe
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpModule
  ],
  providers: [TodosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
