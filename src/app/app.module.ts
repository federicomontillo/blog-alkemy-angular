import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { SharedModule } from './components/shared/shared.module';
import { UsersModule } from './components/users/users.module';
import { PostsModule } from './components/posts/posts.module';
import { AlbumsModule } from './components/albums/albums.module';
import { TodosModule } from './components/todos/todos.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    UsersModule,
    PostsModule,
    AlbumsModule,
    TodosModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
