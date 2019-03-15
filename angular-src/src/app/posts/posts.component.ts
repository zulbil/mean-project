import { Component, OnInit } from '@angular/core';
import { Post } from '../classes/post';
import { PostService } from '../services/post/post.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})

export class PostsComponent implements OnInit {
  posts : Post[]|{posts: Post[]};
  postForm: FormGroup; 
 
  constructor( private postService: PostService ) { }

  ngOnInit() {
    this.getPostsList();
    this.formControl();
  }

  getPostsList() {
    this.postService.getPosts().subscribe((data) => {
      console.log(data);
      this.posts = data; 
    })
  }

  like(post: Post) {
    post.likes++;
  }

  dislike (post: Post) {
    post.dislikes++;
  }

  onMusicUpload (event) {
    console.log(event); 
  }

  onImageUpload (event) {
    console.log(event); 
  }

  onVideoUpload (event) {
    console.log(event); 
  }

  onFileUpload (event) {
    console.log(event); 
  }

  postStatus () {
    if(this.postForm.valid) {
      console.log('Valid form');
      const newPost = {
        content: this.postForm.value.content
      }
      console.log(newPost); 
      this.postService.createPost(newPost).subscribe((result)=> {
        console.log(result);
      }, (error) => {
        console.log(error);
      })
    } else {
      console.log('Form is invalid'); 
    }

    this.postForm.reset();
  }

  formControl () {
    this.postForm = new FormGroup({
      'content': new FormControl(null, [
        Validators.required,
        Validators.minLength(8)
      ])
    });
  }
}
