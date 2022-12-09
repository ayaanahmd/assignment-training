import { Component, OnInit } from '@angular/core';
import { Post } from './posts';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  postsCount = 0;
  postsList: Post[] = [];

  ngOnInit(): void {
    
  }
  showCount(post: Post){
    this.postsList.push(post)
    this.postsCount++;
  }
}
