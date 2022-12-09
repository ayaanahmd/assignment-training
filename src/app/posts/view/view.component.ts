import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../posts';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  @Input() posts: Post[] = []
  constructor() { }

  ngOnInit(): void {
  }

}
