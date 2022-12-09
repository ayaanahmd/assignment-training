import { Component, EventEmitter, OnInit, Output } from '@angular/core';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  @Output() complete = new EventEmitter() // can use Subjects instead
  title: string = '';
  content: string = '';
  ngOnInit(): void {
  }

  post(){
    //this.postService.addPost({title: this.title,content: this.content});
    this.complete.emit({title: this.title,content: this.content})
  }

}
