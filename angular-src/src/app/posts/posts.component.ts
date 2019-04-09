import { Component, OnInit, OnDestroy } from '@angular/core';
import { Post } from '../classes/post';
import { PostService } from '../services/post/post.service';
import { AuthService } from './../services/auth/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FlashMessagesService   } from 'angular2-flash-messages';
import { mimeType } from './mime-type-validator';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})

export class PostsComponent implements OnInit {
  posts: Post[] = [];
  postForm: FormGroup;
  user;
  imagePreview;
  mode = 'create';
  clickLike = false; 

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
    });
  }

  like(post) {
    this.clickLike = ( this.clickLike ) ? false : true ;

    if (!post.isLiked) {
      post.likes++;
      this.postService.likePost(post).subscribe((data) => {
        console.log(data);
      }, (error) => {
        console.log(error);
      });
    } else {
      post.likes--;
      this.postService.dislikePost(post).subscribe((data) => {
        console.log(data);
      }, (error) => {
        console.log(error);
      });
    }
    this.getPostsList();
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
    };
    reader.readAsDataURL(file);
  }

  onVideoUpload (event) {
    console.log(event);
  }

  onFileUpload (event) {
    console.log(event);
  }

  postStatus () {
    console.log(this.user.username);
    if ( this.postForm.valid ) {
      const newPost = {
        _id: null,
        created: null,
        updatedAt: null,
        likes: 0,
        dislikes: 0,
        content: this.postForm.value.content,
        media: null,
        _creator: {
          username: this.user.username
        }
      };
      if (this.mode === 'create') {
        this.postService.createPost(newPost, this.postForm.value.image ).subscribe((result) => {
          console.log(result);
        }, (error) => {
          console.log(error);
        });
      } else {
        // Edit service
        console.log(newPost);
        // this.postService.editPost(newPost, this.postForm.value.image).subscribe((result) => {
        //   console.log(result);
        // }, (error) => {
        //   console.log(error);
        // })
      }
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

  editPost( post: Post ) {
    console.log(post);
    this.postForm.setValue({
      'content': post.content,
      'image': post.media
    });
    this.imagePreview = post.media;
    this.mode = 'edit';
  }

  removePost( post: Post) {
    this.postService.deletePost(post).subscribe(() => {
      const updatedPosts = this.posts.filter((singlePost) => post._id !== singlePost._id );
      this.posts = updatedPosts;
    }, (error) => console.log(error) )
  }
}
