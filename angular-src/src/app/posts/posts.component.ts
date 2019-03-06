import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post';
import { PostService } from '../services/post/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts : Post[];

  myPost : Post =  {
    id: 1,
    published_at: Date(),
    title: "My firtst post",
    likes: 150,
    dislikes: 50,
    comments: 10,
    views: 25,
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce luctus vehicula tellus ac placerat",
    media: "../../assets/images/claims.jpg"
  };

  constructor( private postService: PostService ) { }

  ngOnInit() {
    this.getPostsList();
  }

  getPostsList(): void {
    this.postService
        .getPosts()
        .subscribe((data) => {
          this.posts = data;
        });
  }

  like(post: Post) {
    post.likes++;
  }

  dislike (post: Post) {
    post.dislikes++;
  }

}
