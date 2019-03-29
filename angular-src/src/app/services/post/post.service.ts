import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, Subject } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Post } from '../../classes/post';

import { AuthService } from './../auth/auth.service';
import { FlashMessagesService   } from 'angular2-flash-messages';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
const httpHeaders = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'x-auth': localStorage.getItem('token')
  })
};
const httpHeadersUpload = {
  headers: new HttpHeaders({
    'x-auth': localStorage.getItem('token')
  })
};
@Injectable({
  providedIn: 'root'
})
export class PostService {
  private baseApiEndpoint  	= 'http://localhost:3000';
  private postList: Post[]  = [];
  private postUpdated 		  = new Subject<Post[]>();
  private user              = this.auth.getUserConnected();

  constructor( private http: HttpClient, private flashService: FlashMessagesService, private auth: AuthService ) { }

  getPosts() {
    return this.http.get<{posts: Post[]}>(`${this.baseApiEndpoint}/feed`, httpHeaders)
              .pipe(tap((feed) => {
                this.postList = feed.posts;
                this.postUpdated.next([...this.postList]);
              }),
              catchError(this.handleError<{posts: Post[]}>('Fetching post'))
    );
  }

	createPost( newPost, image ) {
		const formData = new FormData();
		formData.append('content', newPost.content);
    formData.append('image', image);
		return this.http.post<Post>(`${this.baseApiEndpoint}/new/post`, formData, httpHeadersUpload)
            .pipe(tap(( newPostdata ) => {
              if ( newPostdata ) {
                const newPostFront = {
                  ...newPostdata,
                  _creator: { username: this.user.username }
                };
                this.postList.push( newPostFront );
                this.postUpdated.next([...this.postList]);
                this.flashService.show('A new post was posted', { cssClass: 'alert-success', timeout: 5000 });
              }
            }),
            catchError(this.handleError<any>('Creating a new post'))
		);
  }

  deletePost ( post: Post ) {
    return this.http.delete(`${this.baseApiEndpoint}/post/remove/${post._id}`, httpHeaders)
            .pipe(tap(() => {
              this.flashService.show('Your post is deleted...', { cssClass: 'alert-success', timeout: 5000 });
            }),
            catchError(this.handleError<any>('Deleting a new post'))
		);
  }

  getPostsUpdateListener () {
    return this.postUpdated.asObservable();
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
