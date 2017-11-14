import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  @Input() title: string = "Content title";
  content: string[] = ["Check books", "Go grossery shopping", "Read a book", "watch a show"];
  constructor() { }

  ngOnInit() {
  }

}
