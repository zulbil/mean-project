import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, Subject } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Post } from '../../classes/post';
import { Comment } from '../../classes/comment';

import { AuthService } from './../auth/auth.service';
import { FlashMessagesService   } from 'angular2-flash-messages';


@Injectable({
  providedIn: 'root'
})
export class PostService {
  private baseApiEndpoint  	= 'http://localhost:3000';
  private postList: Post[]  = [];
  private user              = this.auth.getUserConnected();

  constructor( private http: HttpClient, private flashService: FlashMessagesService, private auth: AuthService ) { }

  getPosts() {
    return this.http.get<{posts: Post[]}>(`${this.baseApiEndpoint}/feed`)
              .pipe(tap((feed) => {
                this.postList = feed.posts;
              }),
              catchError(this.handleError<{posts: Post[]}>('Fetching post'))
    );
  }

	createPost( newPost, image, video ) {
		const formData = new FormData();
		formData.append('content', newPost.content);
    formData.append('image', image);
    formData.append('video', video);
		return this.http.post<Post>(`${this.baseApiEndpoint}/new/post`, formData)
            .pipe(tap(( newPostdata ) => {
              if ( newPostdata ) {
                const newPostFront = {
                  ...newPostdata,
                  _creator: { username: this.user.username }
                };
                this.postList.unshift( newPostFront );
                this.flashService.show('A new post was posted', { cssClass: 'alert-success', timeout: 5000 });
              }
            }),
            catchError(this.handleError<any>('Creating a new post'))
		);
  }

  editPost( newPost, image, video ) {
		const formData = new FormData();
		formData.append('content', newPost.content);
    formData.append('image', image);
    formData.append('video', video);
		return this.http.patch<Post>(`${this.baseApiEndpoint}/post/edit/${newPost._id}`, formData)
            .pipe(tap(( newPostdata ) => {
              if ( newPostdata ) {
                const newPostFront = {
                  ...newPostdata,
                  _creator: { username: this.user.username }
                };
                console.log(newPostFront); 
                // this.postList.unshift( newPostFront );
                // this.flashService.show('A new post was posted', { cssClass: 'alert-success', timeout: 5000 });
              }
            }),
            catchError(this.handleError<any>('Creating a new post'))
		);
  }

  deletePost ( post: Post ) {
    return this.http.delete(`${this.baseApiEndpoint}/post/remove/${post._id}`)
            .pipe(tap(() => {
              const updatedPosts = this.postList.filter((singlePost) => post._id !== singlePost._id );
              this.postList = updatedPosts;
            }),
            catchError(this.handleError<any>('Deleting a new post'))
		);
  }


  likePost ( post: Post ) {
    return this.http.post(`${this.baseApiEndpoint}/post/like/${post._id}`, null)
              .pipe(tap((like) => {
                console.log(like);
              }),
              catchError(this.handleError<any>('Liking post'))
    );
  }

  dislikePost ( post: Post ) {
    return this.http.post(`${this.baseApiEndpoint}/post/dislike/${post._id}`, null)
              .pipe(tap((like) => {
                console.log(like);
              }),
              catchError(this.handleError<any>('Liking post'))
    );
  }

  commentPost (comment: any) {
    console.log(comment);
    return this.http.post(`${this.baseApiEndpoint}/new/comment/${comment.post}`, comment)
    .pipe(tap((com: Comment) => {
      console.log(com);
    }),
    catchError(this.handleError<any>('Comment post'))
    );
  }

  editCommentPost (comment: Comment) {
    return this.http.patch(`${this.baseApiEndpoint}/comment/edit/${comment._id}`, comment)
    .pipe(tap((com: {comment: Comment}) => {
      console.log(com);
    }),
    catchError(this.handleError<any>('Edit comment'))
    );
  }

  removeCommentPost (post: Post, comment: Comment ) {
    return this.http.delete(`${this.baseApiEndpoint}/post/${post._id}/comment/remove/${comment._id}`).pipe(tap((data) => {
      console.log(data);
    }),
    catchError(this.handleError<any>('Edit comment'))
    );
  }
   /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.flashService.show(`${error.message}`, { cssClass: 'alert-danger', timeout: 5000 });

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
