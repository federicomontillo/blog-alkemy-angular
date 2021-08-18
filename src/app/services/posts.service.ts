import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private url = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get(`${this.url}/posts`);
  }

  getComments(id: any) {
    return this.http.get(`${this.url}/posts/${id}/comments`);
  }

  getPost(id: any) {
    return this.http.get(`${this.url}/posts/${id}`);
  }

  getPostsUser(id: any) {
    return this.http.get(`${this.url}/users/${id}/posts`);
  }
}
