import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Todos } from 'src/app/models/todos';
import { TodosService } from 'src/app/services/todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todos[] = [];
  userId: string = '';
  state: any = '';

  displayedColumns: string[] = ['title', 'userId', 'state'];
  dataSource = new MatTableDataSource(this.todos);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private todosServices: TodosService,
    private activateRoute: ActivatedRoute) { }


  ngOnInit(): void {
    this.loadTodos();
  }

  filterUser(event: Event) {
    this.userId = (event.target as HTMLInputElement).value;
    this.dataSource.filterPredicate =
      (data: Todos, filter: any) => !filter || data.userId == filter;
    this.dataSource.filter = this.userId;
  }

  changeState(todos: any) {
    this.loadTodos();
    this.todos = todos;
    this.dataSource = new MatTableDataSource(this.todos);
    this.dataSource.paginator = this.paginator;
    this.state = null;
  }

  changeStateTrue(todos: any) {
    let todoCompl = todos.filter((todo: any) => {
      return todo.completed;
    });
    this.todos = todoCompl;
    this.dataSource = new MatTableDataSource(this.todos);
    this.dataSource.paginator = this.paginator;
    this.state = true;
  }

  changeStateFalse(todos: any) {
    let todoCompl = todos.filter((todo: any) => {
      return !todo.completed;
    });
    this.todos = todoCompl;
    this.dataSource = new MatTableDataSource(this.todos);
    this.dataSource.paginator = this.paginator;
    this.state = false;
  }

  loadTodos() {
    const userId = this.activateRoute.snapshot.paramMap.get('id');
    if (userId) {
      this.todosServices.getTodosId(userId)
        .subscribe((resp: any) => {
          this.todos = resp;
          this.dataSource = new MatTableDataSource(this.todos);
          this.dataSource.paginator = this.paginator;
        });
    } else {
      this.todosServices.getTodos()
        .subscribe((resp: any) => {
          this.todos = resp;
          this.dataSource = new MatTableDataSource(this.todos);
          this.dataSource.paginator = this.paginator;
        });
    }
  }
}

