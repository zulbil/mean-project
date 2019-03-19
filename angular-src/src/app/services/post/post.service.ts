import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Post } from '../../classes/post';

import { FlashMessagesService   } from 'angular2-flash-messages';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
const httpHeaders = {
  headers: new HttpHeaders({ 
    'Content-Type': 'application/json', 
    'x-auth': localStorage.getItem('token') 
  })
}
@Injectable({
  providedIn: 'root'
})
export class PostService {
  private baseApiEndpoint = 'http://localhost:3000';
  postList: Post[]; 
  constructor( 
    private http: HttpClient, 
    private flashService : FlashMessagesService) {

    }

  getPosts() {
    return this.http.get<{posts: Post[]}>(`${this.baseApiEndpoint}/feed`, httpHeaders)
                    .pipe(tap((feed) => this.postList = feed.posts ),
                    catchError(this.handleError<Post[]>('Fetching post'))
    );
  }

  createPost(newPost: Post) {
    this.postList.push(newPost); 

    return this.http.post(`${this.baseApiEndpoint}/new/post`,newPost, httpHeaders)
                    .pipe(tap((newPost) => {
                      if(newPost) 
                        this.flashService.show('A new post was posted', { cssClass: 'alert-success', timeout: 5000 });
                    }),
                    catchError(this.handleError<any>('Creating a new post'))
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
