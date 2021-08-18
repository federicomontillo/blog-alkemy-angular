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
  stateSelect: any;

  displayedColumns: string[] = ['title', 'userId', 'state'];
  dataSource = new MatTableDataSource(this.todos);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private todosServices: TodosService,
    private activateRoute: ActivatedRoute) { }


  ngOnInit(): void {
    this.loadTodos();
  }

  selectState(filterValue: any) {
    this.stateSelect = filterValue;
    this.dataSource.filter = filterValue;
    return;
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

