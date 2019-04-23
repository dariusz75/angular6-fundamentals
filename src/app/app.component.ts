import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  posts = [];

  constructor(private httpService: HttpService) { }

  getPosts() {
    this.httpService.getPosts().subscribe(posts => {
      this.posts = posts;
    });
  }

  getPost() {
    this.httpService.getPost(1).subscribe(post => {
      this.posts.push(post);
    });
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

  clear() {
    this.posts = [];
  }

}

export interface Post {
  userId?: number;
  id?: number;
  title?: string;
  body?: string;
}
