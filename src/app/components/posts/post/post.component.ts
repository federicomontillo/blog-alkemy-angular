import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  post: any = {};
  comments: any = [];

  constructor(private activateRoute: ActivatedRoute,
    private postService: PostsService) { }

  ngOnInit(): void {
    const id = this.activateRoute.snapshot.paramMap.get('id');
    this.postService.getPost(id)
      .subscribe((resp: any) => {
        this.post = resp;
      });

    this.postService.getComments(id)
      .subscribe((com: any) => {
        this.comments = com;
      })
  }
}
