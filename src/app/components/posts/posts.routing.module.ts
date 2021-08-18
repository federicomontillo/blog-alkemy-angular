import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostComponent } from './post/post.component';
import { PostsComponent } from './posts.component';


const routes: Routes = [
  { path: '', component: PostsComponent },
  { path: 'posts/user/:id', component: PostsComponent },
  { path: 'posts/post/:id', component: PostComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }