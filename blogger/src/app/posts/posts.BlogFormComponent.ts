/**
 * Created by marcholtsman on 10/18/17.
 */
import { Component } from '@angular/core';

import {FormBuilder, FormGroup} from '@angular/forms';
import {PostsService} from '../posts.service';

@Component({
  selector: 'blog-form',
  templateUrl: './blog-form.component.html'
})
export class BlogFormComponent {
  // intialize a form
  blogPostForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private postsService: PostsService,
  ){
    this.createForm();
  }

  // create the form
  createForm(){
    this.blogPostForm = this.fb.group({
      title: '',
      author: '',
      body: ''
    });
  }

  // when the submit button is pressed we process the data
  // and call the post request function from the service
  // make sure the form has the (ngSubmit)="onSubmit()" in the form tag to call this function
  onSubmit() {
    console.log('In onSubmit');
    console.log(this.blogPostForm.get('title').value);
    const body = {
      title: this.blogPostForm.get('title').value,
      author: this.blogPostForm.get('author').value,
      body: this.blogPostForm.get('body').value
    };
    this.postsService.postBlogPost(body);
  }

}
