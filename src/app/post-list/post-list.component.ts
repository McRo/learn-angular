import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  // la liste est passée en propriété
  @Input() list: Array<Object>

  constructor() { }

  ngOnInit() {
  }

}
