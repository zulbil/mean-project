import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { Post } from '../classes/post';
import { Comment } from '../classes/comment';
import { PostService } from '../services/post/post.service';
import { AuthService } from './../services/auth/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FlashMessagesService   } from 'angular2-flash-messages';
import { mimeType, mimeTypeVideo } from './mime-type-validator';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})

export class PostsComponent implements OnInit {
  posts: Post[] = [];
  postForm: FormGroup;
  commentForm: FormGroup;
  editCommentForm: FormGroup;
  editPostForm: FormGroup;
  user;
  imagePreview;
  videoPreview;
  mode = 'create';
  clickLike = false; 
  @ViewChild('likeP') likeP: ElementRef; 
  showComment = false; 
  commentToEdit: Comment;

  constructor(
    private postService: PostService,
    private flashMessage: FlashMessagesService,
    private auth: AuthService ) { }

  ngOnInit() {
    this.user = this.auth.getUserConnected();
    console.log("User ID: ",this.user._id);
    this.getPostsList();
    this.formControl();
  }

  getPostsList() {
    this.postService.getPosts().subscribe((data) => {
      if ( data.posts != null) {
        this.posts = data.posts;
        console.log(this.posts);
      }
    });
  }

  like(post: Post) {
    post.isLiked = !post.isLiked; 
    const parentClass = ".post-"+post._id; 
    if (!post.isLiked) {
      post.likes--;
      document.querySelector(parentClass+" .like-action i").classList.remove('fa-thumbs-up');
      document.querySelector(parentClass+" .like-action i").classList.add('fa-thumbs-o-up');
      this.postService.dislikePost(post).subscribe((data) => {
        console.log(data);
      }, (error) => {
        console.log(error);
      });
    } else {
      post.likes++;
      document.querySelector(parentClass+" .like-action i").classList.add('fa-thumbs-up');
      document.querySelector(parentClass+" .like-action i").classList.remove('fa-thumbs-o-up');
      this.postService.likePost(post).subscribe((data) => {
        console.log(data);
      }, (error) => {
        console.log(error);
      });
    }
    
  }

  dislike (post: Post) {
    post.likes--;
    this.postService.dislikePost(post).subscribe((data) => {
      console.log(data);
    }, (error) => {
      console.log(error);
    });
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

  onEditImageUpload(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.editPostForm.patchValue({ image: file });
    this.editPostForm.get('image').updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result;
    };
    reader.readAsDataURL(file);
  }
  onVideoUpload (event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.postForm.patchValue({ video: file });
    this.postForm.get('video').updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.videoPreview = reader.result;
    };
    reader.readAsDataURL(file);

  }

  onEditVideoUpload (event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.editPostForm.patchValue({ video: file });
    this.editPostForm.get('video').updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.videoPreview = reader.result;
    };
    reader.readAsDataURL(file);

  }

  cancelEditPost () {
    this.mode = "create";
    this.postForm.reset();
  }
  postStatus () {
    console.log(this.user.username);
    if ( this.postForm.value.content ) {
      const newPost = {
        _id: null,
        created: null,
        updatedAt: null,
        likes: 0,
        dislikes: 0,
        content: this.postForm.value.content,
        image: null,
        video: null,
        _creator: {
          username: this.user.username
        }
      };
      if (this.mode === 'create') {
        this.postService.createPost(newPost, this.postForm.value.image, this.postForm.value.video ).subscribe((result) => {
          console.log(result);
        }, (error) => {
          console.log(error);
        });
      } else {
        // Edit service
        console.log(newPost);
        this.postService.editPost(newPost, this.editPostForm.value.image, this.editPostForm.value.video ).subscribe((result) => {
          console.log(result);
        }, (error) => {
          console.log(error);
        })
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
      }), 
      'video': new FormControl(null, {
        validators: [Validators.required ],
        asyncValidators: [mimeTypeVideo]
      })
    });
    this.editPostForm = new FormGroup({
      'content': new FormControl(null, [
        Validators.required,
        Validators.minLength(8)
      ]),
      'image': new FormControl(null, {
        validators: [Validators.required ],
        asyncValidators: [mimeType]
      }), 
      'video': new FormControl(null, {
        validators: [Validators.required ],
        asyncValidators: [mimeTypeVideo]
      })
    });

    this.commentForm  = new FormGroup({
      'content': new FormControl(null, [
        Validators.required,
        Validators.minLength(8)
      ])
    });

    this.editCommentForm  = this.commentForm;
  }

  editPost( post: Post ) {
    console.log(post);
    this.editPostForm.setValue({
      'content': post.content,
      'image': post.image,
      'video': post.video
    });
    this.imagePreview = post.image;
    this.videoPreview = post.video;
    this.mode = 'edit';
  }

  removePost( post: Post) {
    this.postService.deletePost(post).subscribe(() => {
      const index = this.posts.indexOf(post); 
      this.posts.splice(index, 1); 
    }, (error) => console.log(error) )
  }

  commentPost (post: Post) {
    if (this.commentForm.valid) {

      const newcomment: Comment = {
        _id: null,
        created: null,
        updated: null,
        content: this.commentForm.value.content,
        _creator: this.user._id,
        post: post._id
      };
      this.postService.commentPost(newcomment).subscribe((comment : Comment) => {
        post.comments.unshift(comment);
      }, (error) => {
        console.log("Error", error);
      });
      this.commentForm.reset(); 
    }
  }

  showCommentPost(post: Post, localRef: HTMLElement) {
    const classComment = 'cp-'+post._id; 
    // Transform HTML Collection into Array 
    const collections = Array.from(localRef.classList);
    if (collections.indexOf(classComment) != -1 ) {
      localRef.classList.remove("hidden"); 
    }
  }

  onKeyDown(event, post : Post ) {
    event.preventDefault();
    this.commentPost(post); 
  }

  updateComment(post:Post, comment: Comment, event: Event) {
    this.editCommentForm.setValue({
      content: comment.content
    }); 
    const item_comment_class = "item-comment-"+comment._id;
    const form_edit_comment = "comment-"+comment._id; 
    document.getElementsByClassName(item_comment_class)[0].classList.add('hidden');
    document.getElementsByClassName(form_edit_comment)[0].classList.remove('hidden');
  }
  cancelComment(comment: Comment) {
    const item_comment_class = "item-comment-"+comment._id;
    const form_edit_comment = "comment-"+comment._id; 
    document.getElementsByClassName(item_comment_class)[0].classList.remove('hidden');
    document.getElementsByClassName(form_edit_comment)[0].classList.add('hidden');
    this.editCommentForm.reset()
  }

  escapecancelComment(event: KeyboardEvent,  comment) {
    if (event.keyCode === 27 ) {
      this.cancelComment(comment); 
    }
  }

  editComment(event, comment:Comment, post: Post) {
    event.preventDefault(); 
    const commentUpdate: Comment = {
      _id: comment._id,
      created: comment.created,
      updated: null,
      content: this.editCommentForm.value.content,
      _creator: this.user._id,
      post: post._id
    };
    this.postService.editCommentPost(commentUpdate).subscribe((data: {comment: Comment}) => { 
      const index = post.comments.indexOf(comment);
      post.comments[index] = data.comment;  
    }, (error) => {
      console.log("Error");
    });
    this.cancelComment(comment);
  }

  removeComment(post: Post, comment: Comment) {
    this.postService.removeCommentPost(post, comment).subscribe((data) => { 
        const index = post.comments.indexOf(comment); 
        post.comments.splice(index,1); 
    }, (error) => {
      throw error;
    })
  }
}
