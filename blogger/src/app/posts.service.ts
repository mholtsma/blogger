import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PostsService {

  constructor(private http: Http) { }

  // Get all posts from the API
  getAllPosts() {
    return this.http.get('/api/posts')
      .map(res => res.json());
  }

  // post blog post to the server
  postBlogPost(body){
    // the .subscribe is what causes the request
    // body is what you are sending
    // in this case body is:
    /*
    body{
      title: 'some string',
     author: 'some string',
     body: 'some string'
    }
    this is all defined in the component
     */
    this.http.post('/api/postBlog', body).subscribe();
  }

  // Post comment
  postComment(id, body) {
    console.log("POSTING COMMENT in posts.service.ts");
    console.log("POST SERVICE COMMENT BODY: " + body);
    const comment = {
      id: id,
      body: body
    }
    return this.http.post('/api/comments', comment)
      .map(res => res.json());
  }

  // Get all comments for a post
  getAllCommentsForPost(id) {

  }
}
