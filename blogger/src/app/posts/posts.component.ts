import {Component, Input, OnInit} from '@angular/core';
import {PostsService} from "../posts.service";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  @Input('refresh') refresh: false;

  posts: any = [];

  constructor(private postsService: PostsService) { }

  ngOnInit() {
    // Retrieve posts from the API
    this.postsService.getAllPosts().subscribe(posts => {
      this.posts = posts;
    });
  }

  refreshList(){
    if(this.refresh){
      this.postsService.getAllPosts().subscribe(posts => {
        this.posts = posts;
      });
    }
  }
}
