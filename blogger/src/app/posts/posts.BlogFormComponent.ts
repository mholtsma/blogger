/**
 * Created by marcholtsman on 10/18/17.
 */
import {Component, OnInit} from '@angular/core';

import {FormBuilder, FormControl, FormGroup, Validators, FormsModule} from '@angular/forms';
import {PostsService} from '../posts.service';

@Component({
  selector: 'blog-form',
  templateUrl: './blog-form.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogFormComponent implements OnInit {
  // intialize a form
  blogPostForm: FormGroup;
  commentForm: FormGroup;   // Initialize form
  posts: any = [];
  blogPost = {
    title: '',
    author: '',
    body: '',
  };

  constructor(private fb: FormBuilder,
              private postsService: PostsService,) {
    this.createCommentForm();
  }

  // create the form
  createForm() {
    this.blogPostForm = new FormGroup({
    'title': new FormControl(this.blogPost.title, [
    Validators.required,
    Validators.minLength(3),
    ]),
    'author': new FormControl(this.blogPost.author, [
    Validators.required,
    Validators.minLength(1),
    ]),
    'body': new FormControl(this.blogPost.body, Validators.required)
    });
  }

  // Create the form
  createCommentForm() {
    this.commentForm = this.fb.group({
      body: ''
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
  }

  ngOnInit() {
    this.getPosts();

    this.createForm();
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

  get title() { return this.blogPostForm.get('title'); }

  get author() { return this.blogPostForm.get('author'); }

  get body() { return this.blogPostForm.get('body'); }

}
