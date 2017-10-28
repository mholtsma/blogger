import { Component, OnInit } from '@angular/core';
import {PostsService} from "../posts.service";

import {FormBuilder, FormGroup} from '@angular/forms'

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: any = [];
  commentForm: FormGroup;   // Initialize form

  constructor(private fb: FormBuilder, private postsService: PostsService){
    this.createCommentForm();
  }

  // Create the form
  createCommentForm() {
    this.commentForm = this.fb.group ({
      body: ''
    });
  }

  // Post comment
  postComment(id) {
    console.log("POSTING COMMENT in posts.component.ts");
    const comment = this.commentForm.get('body').value;
    console.log("PASSING THIS INTO POSTCOMMENT: " + comment);
    this.postsService.postComment(id, comment).subscribe();
  }

  ngOnInit() {
    // Retrieve posts from the API
    this.postsService.getAllPosts().subscribe(posts => {
      this.posts = posts;
    });
  }

}
