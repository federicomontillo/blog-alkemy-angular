import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AlbumsModule } from './components/albums/albums.module';
import { PostsModule } from './components/posts/posts.module';
import { TodosModule } from './components/todos/todos.module';
import { UsersModule } from './components/users/users.module';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'users', loadChildren: () => import('./components/users/users.module').then(x => UsersModule) },
  { path: 'posts', loadChildren: () => import('./components/posts/posts.module').then(x => PostsModule) },
  { path: 'albums', loadChildren: () => import('./components/albums/albums.module').then(x => AlbumsModule) },
  { path: 'todos', loadChildren: () => import('./components/todos/todos.module').then(x => TodosModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
