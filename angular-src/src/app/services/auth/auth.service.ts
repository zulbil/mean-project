import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { FlashMessagesService   } from 'angular2-flash-messages';

import { User } from './../../classes/users';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseApiEndpoint = 'http://localhost:3000';
  authToken;
  user;

  constructor( private http: HttpClient, private flashService: FlashMessagesService ) { }

  /*** Add a new user */
  registerUser (user: User) {
    return this.http.post<User>(`${this.baseApiEndpoint}/signup`, user, httpOptions)
                    .pipe(tap((newUser) => console.log(newUser)),
                    catchError(this.handleError<User>('Register User'))
    );
  }

  /** Log User */
  logUser (user: any) {
    return this.http.post(`${this.baseApiEndpoint}/login`, user, httpOptions)
                    .pipe(tap((data) => console.log(data)),
                    catchError(this.handleError<any>('Login User'))
    );
  }

  /** Store User data on client */
  storeUserData (token, user) {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));

    this.authToken = token;
    this.user = user;
  }

  /** Logout User */
  logout () {
    this.authToken = null;
    this.user = null;
    localStorage.clear();
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
      this.flashService.show(`${operation} failed: ${error.message}`, { cssClass: 'alert-danger', timeout: 5000 });

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
