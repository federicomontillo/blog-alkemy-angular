import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumsComponent } from '../albums/albums.component';
import { TodosComponent } from '../todos/todos.component';
import { UserComponent } from './user/user.component';
import { UsersComponent } from './users.component';


const routes: Routes = [
  { path: '', component: UsersComponent },
  { path: 'user/:id', component: UserComponent },
  { path: ':id/albums', component: AlbumsComponent },
  { path: ':id/todos', component: TodosComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }