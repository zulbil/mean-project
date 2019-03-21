import { Component, OnInit } from '@angular/core';
import { Post } from '../classes/post';
import { PostService } from '../services/post/post.service';
import { AuthService } from './../services/auth/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FlashMessagesService   } from 'angular2-flash-messages';
import { mimeType } from './mime-type-validator';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})

export class PostsComponent implements OnInit {
  posts : Post[];
  postForm: FormGroup;
  user;
  imagePreview;

  constructor(
    private postService: PostService,
    private flashMessage: FlashMessagesService,
    private auth: AuthService ) { }

  ngOnInit() {
    this.user = this.auth.getUserConnected();
    this.getPostsList();
    this.formControl();
  }

  getPostsList() {
    this.postService.getPosts().subscribe((data) => {
      console.log(data);
      if ( data.posts != null) {
        this.posts = data.posts;
      }
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

  onImageUpload (event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.postForm.patchValue({ image: file });
    this.postForm.get('image').updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result;
    }
    reader.readAsDataURL(file);
  }

  onVideoUpload (event) {
    console.log(event);
  }

  onFileUpload (event) {
    console.log(event);
  }

  postStatus () {
    if(this.postForm.valid) {
      const newPost = {
        _id: null,
        created: ""+new Date().getTime(),
        updatedAt: null,
        likes: 0,
        dislikes: 0,
        content: this.postForm.value.content,
        media: null,
        _creator: {
          username: this.user.username
        }
      }

      this.postService.createPost(newPost, this.postForm.value.image).subscribe((result)=> {
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
      ]),
      'image': new FormControl(null, {
        validators: [Validators.required ],
        asyncValidators: [mimeType]
      })
    });
  }
}
