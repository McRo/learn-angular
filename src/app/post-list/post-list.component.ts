import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../models/Post.model';
import { PostsService } from '../services/posts.service';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts: Post[];
  postSubscription: Subscription

  constructor(private PostsService: PostsService){}

  ngOnInit() {
    this.postSubscription = this.PostsService.PostSubject.subscribe(
      (posts: Post[]) => {
        this.posts = posts
      }
    )
    this.PostsService.getPosts();
    this.PostsService.emitPosts();
  }

}
