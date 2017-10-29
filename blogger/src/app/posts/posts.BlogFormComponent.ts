/**
 * Created by marcholtsman on 10/18/17.
 */
import {Component, OnInit} from '@angular/core';

import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PostsService} from '../posts.service';

@Component({
  selector: 'blog-form',
  templateUrl: './blog-form.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogFormComponent implements OnInit {

  // Initialize form
  blogPostForm: FormGroup;
  commentForm: FormGroup;

  posts: any = [];

  constructor(private fb: FormBuilder, private postsService: PostsService,) {
    this.createForm();
    this.createCommentForm();
  }

  // create the form
  createForm() {
    this.blogPostForm = this.fb.group({
      title: '',
      author: '',
      body: ''
    });
  }

  // Create the form
  createCommentForm() {
    this.commentForm = this.fb.group({
      body: ['', Validators.compose([
        Validators.required,
        Validators.minLength(1)
      ])]
    });
  }

  getPosts() {
    // Retrieve posts from the API
    this.postsService.getAllPosts().subscribe(posts => {
      this.posts = posts.reverse();
    });
  }

  // Post comment
  postComment(id) {
    const comment = this.commentForm.get('body').value;       // Get comment body from comment form
    this.postsService.postComment(id, comment).subscribe();
    this.commentForm.reset();                                 // Clear form after comment submission
  }

  ngOnInit() {
    this.getPosts();
  }

  // when the submit button is pressed we process the data
  // and call the post request function from the service
  // make sure the form has the (ngSubmit)="onSubmit()" in the form tag to call this function
  // also call the get posts function to update the list
  onSubmit() {
    console.log('In onSubmit');
    console.log(this.blogPostForm.get('title').value);
    const body = {
      title: this.blogPostForm.get('title').value,
      author: this.blogPostForm.get('author').value,
      body: this.blogPostForm.get('body').value
    };
    this.postsService.postBlogPost(body);
    this.getPosts();
    this.blogPostForm.get('title').reset();
    this.blogPostForm.get('author').reset();
    this.blogPostForm.get('body').reset();
  }

}
