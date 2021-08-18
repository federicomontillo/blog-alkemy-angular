import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';

import { PostsComponent } from './posts.component';
import { PostComponent } from './post/post.component';
import { PostsRoutingModule } from './posts.routing.module';

@NgModule({
  declarations: [
    PostsComponent,
    PostComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    SharedModule,
    HttpClientModule
  ]
})
export class PostsModule { }
