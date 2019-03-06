import { Injectable } from '@angular/core';
import { Post } from '../../models/post';
import { POSTS } from '../../server/mock-posts';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor() { }

  getPosts(): Observable<Post[]> {
    return of(POSTS);
  }
}
