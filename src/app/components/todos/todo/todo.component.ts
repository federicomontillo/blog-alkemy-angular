import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodosService } from 'src/app/services/todos.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todo: any = [];

  constructor(private activateRoute: ActivatedRoute,
    private todosService: TodosService) { }

  ngOnInit(): void {
    const id = this.activateRoute.snapshot.paramMap.get('id');
    this.todosService.getTodoId(id)
      .subscribe((resp: any) => {
        this.todo = resp;
      });
  }

  changeState(todo: any) {
    const id = this.activateRoute.snapshot.paramMap.get('id');
    if (this.todo.completed) {
      this.todo.completed = false;
      this.todo.id = id;
      this.setState(id, todo)
    } else {
      this.todo.completed = true;
      this.todo.id = id;
      this.setState(id, todo)
    }
  }

  setState(id: any, todo: any) {
    this.todosService.setTodo(id, todo)
      .subscribe((resp: any) => {
        this.todo = resp;
        console.log(resp);
      });
  }
}
