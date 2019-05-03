import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Post } from '../models/Post.model';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  posts: Post[] = [
    {
      id:0,
      title: 'Angular c\'est vraiment chouette',
      content: 'Depuis la version 1, on est vraiment dans un framework qui tient la root',
      loveIts: 3,
      created_at: null
    },
    {
      id:1,
      title: 'Le Type Script',
      content: 'La fiabilité du TS, on arrête des scopes aléatoire qui génère des erreurs, et les \
       variables typées sont top !',
      loveIts: 0,
      created_at: new Date(2018,1,5)
    },
    {
      id:2,
      title: 'Apprendre un nouveau language',
      content: 'Est ce que ça vaut vraiment le coup de se taper d\'apprendre tous les 6 mois des nouveaux \
      Framework ? S\'ennuierait-on ?',
      loveIts: -2,
      created_at: new Date()
    },
  ]

  PostSubject = new Subject<Post[]>();

  constructor() { }

  emitPosts() {
    this.PostSubject.next(this.posts.slice());
  }

  getSinglePost(id: number) {
    const post = this.posts.find(
      (postObject) => {
        return postObject.id === id;
      }
    )
    return post;
  }

  getPosts() {
    this.emitPosts();
  }

  createNewPost(post: Post) {
    if(post) {
      // add some basic value for Post
      post.id = this.posts.length ? this.posts[this.posts.length-1].id +1 : 0;
      post.created_at = new Date();
      post.loveIts = 0;
      // add new post to posts array
      this.posts.push(post);
      // emit post
      this.emitPosts();
    }
  }

  addSomeLove(post: Post){
    const current_post = this.getSinglePost(post.id)
    current_post.loveIts ++;
    this.emitPosts();
  }

  removeSomeLove(post: Post){
    const current_post = this.getSinglePost(post.id)
    current_post.loveIts --;
    this.emitPosts();
  }

  removePost(post: Post) {
    const postIndexToRemove = this.posts.findIndex(
      (postObject) => {
        if(postObject.id === post.id){
          return true
        }
      }
    )
    if(postIndexToRemove>=0)
    {
      this.posts.splice(postIndexToRemove, 1)
      this.emitPosts();
    }
  }

}
