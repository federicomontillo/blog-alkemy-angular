import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  private url = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) { }

  getTodos() {
    return this.http.get(`${this.url}/todos`);
  }

  getTodosId(id: any) {
    return this.http.get(`${this.url}/users/${id}/todos`);
  }

  getTodoId(id: any) {
    return this.http.get(`${this.url}/todos/${id}`);
  }

  setTodo(id: any, todo: any) {
    return this.http.put(`${this.url}/todos/${id}`, todo);
  }
}
