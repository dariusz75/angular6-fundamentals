import { Injectable } from '@angular/core';
import { Post } from './app.component';
import { Observable } from 'rxjs';
import { HttpParams, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Array<Post>> {
    return this.http.get<Array<Post>>('https://jsonplaceholder.typicode.com/posts');
  }

  getPost(id: number): Observable<Array<Post>> {
    return this.http.get<Array<Post>>('https://jsonplaceholder.typicode.com/posts/' + id);
  }

  getPostsByUser(userId: number): Observable<Array<Post>> {
    const parameters = new HttpParams().set('userId', '1');
    return this.http.get<Array<Post>>('https://jsonplaceholder.typicode.com/posts/', { params: parameters });
  }

  addPost(post: Post): Observable<Post> {
    return this.http.post<Post>('https://jsonplaceholder.typicode.com/posts/', post);
  }

  updatePost(post: Post): Observable<Post> {
    return this.http.put<Post>('https://jsonplaceholder.typicode.com/posts/' + post.id, post);
  }

  deletePost(id: number): Observable<Post> {
    return this.http.delete<Post>('https://jsonplaceholder.typicode.com/posts/' + id);
  }

  changePost(post: Post) {

  }


}
