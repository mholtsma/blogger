import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import {RouterModule} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from "@angular/http";
import {PostsService} from "./posts.service";
import {BlogFormComponent} from './posts/posts.BlogFormComponent';


// Define the routes
const ROUTES = [
  {
    path: 'posts',
    component: PostsComponent
  },
];

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    BlogFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES) // Add routes to the app
  ],
  providers: [
    PostsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
