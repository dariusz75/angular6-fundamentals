import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() { }

  getPosts() {

  }

  getPost() {

  }

  getPostByUser() {

  }

  addPost() {

  }

  updatePost() {

  }

  deletePost() {

  }

  changePost() {

  }

}

export interface Post {
  userId?: number;
  id?: number;
  title?: string;
  body?: string;
}
