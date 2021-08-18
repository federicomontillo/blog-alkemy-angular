import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { TodosComponent } from './todos.component';
import { TodoComponent } from './todo/todo.component';
import { TodosRoutingModule } from './todo/todos.routing.module';



@NgModule({
  declarations: [
    TodosComponent,
    TodoComponent
  ],
  imports: [
    CommonModule,
    TodosRoutingModule,
    SharedModule,
    HttpClientModule
  ]
})
export class TodosModule { }
