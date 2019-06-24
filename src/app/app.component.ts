import { Component } from '@angular/core';
import { HttpService } from './http.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Angular Services';


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

  getPostsByUser() {
    this.httpService.getPostsByUser(1).subscribe(posts => {
      this.posts = posts;
    });
  }

  addPost() {
    const myPost: Post = ({
      userId: 1,
      id: null,
      title: 'Test post',
      body: 'This is my test post'
    });

    this.httpService.addPost(myPost).subscribe(post => {
      console.log(post);
    });

  }

  updatePost() {
    const myPost: Post = ({
      userId: 1,
      id: 1,
      title: 'Test post replaced',
      body: 'This is my test post that has been replaced'
    });

    this.httpService.updatePost(myPost).subscribe(post => {
      console.log(post);
    });

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
