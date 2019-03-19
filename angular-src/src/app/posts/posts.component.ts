import { Component, OnInit } from '@angular/core';
import { Post } from '../classes/post';
import { PostService } from '../services/post/post.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FlashMessagesService   } from 'angular2-flash-messages';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})

export class PostsComponent implements OnInit {
  posts : Post[]|{posts: Post[]};
  postForm: FormGroup; 
  
  constructor( 
    private postService: PostService,
    private flashMessage: FlashMessagesService ) { }

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
      const newPost: Post = {
        _id: null,
        created: ""+new Date().getTime(),
        updatedAt: null, 
        likes: 0,
        dislikes: 0,
        content: this.postForm.value.content,
        media: null,
        _creator: null
      }

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
