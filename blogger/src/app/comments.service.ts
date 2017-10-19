import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CommentsService {

  constructor(private http: Http) { }

  // Get all comments from API
  getAllComments() {
    return this.http.get('/api/comments')
      .map(res => res.json());
  }
}
