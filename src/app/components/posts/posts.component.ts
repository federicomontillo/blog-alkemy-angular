import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ActivatedRoute } from '@angular/router';
import { Posts } from 'src/app/models/post';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Posts[] = [];
  userId: string = '';
  title: string = '';

  displayedColumns: string[] = ['title', 'actions'];
  dataSource = new MatTableDataSource(this.posts);


  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private postServices: PostsService,
    private activateRoute: ActivatedRoute,) { }

  ngOnInit(): void {
    this.loadPosts();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  loadPosts() {
    const userId = this.activateRoute.snapshot.paramMap.get('id');
    if (userId) {
      this.postServices.getPostsUser(userId)
        .subscribe((resp: any) => {
          this.posts = resp;
          this.dataSource = new MatTableDataSource(this.posts);
          this.dataSource.paginator = this.paginator;
        });
    } else {
      this.postServices.getPosts()
        .subscribe((resp: any) => {
          this.posts = resp;
          this.dataSource = new MatTableDataSource(this.posts);
          this.dataSource.paginator = this.paginator;
        });
    }
  }
}
