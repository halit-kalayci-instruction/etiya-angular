import { Component, OnInit } from '@angular/core';
import { PostForListingModel } from '../models/postForListingModel';
import { PostService } from '../services/post.service';

@Component({
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent implements OnInit {
  postList: PostForListingModel[] = [];

  // sayfa yüklendiğinde WEB API'den aldığımız cevabı postList değişkenine atayacağız.

  constructor(private postService: PostService) {}
  ngOnInit(): void {
    this.fetchPosts();
  }
  fetchPosts() {
    this.postService.getAll().subscribe((response) => {
      this.postList = response;
      console.log(this.postList);
    });
  }
}
