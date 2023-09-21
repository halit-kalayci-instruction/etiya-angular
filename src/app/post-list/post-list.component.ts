import { Component, OnInit } from '@angular/core';
import { PostForListingModel } from '../models/postForListingModel';
import { PostService } from '../services/post.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent implements OnInit {
  postList: PostForListingModel[] = [];

  // sayfa yüklendiğinde WEB API'den aldığımız cevabı postList değişkenine atayacağız.

  constructor(private postService: PostService, private router: Router) {}
  ngOnInit(): void {
    this.fetchPosts();
  }
  fetchPosts() {
    this.postService.getAll().subscribe((response) => {
      this.postList = response;
    });
  }

  navigateToDetail(id: number) {
    // Typescript/Javascript TIP : Bir obje içerisinde bir değeri bir değişkene atamak için, eğer ikisi de aynı isimde ise sadece değişken ismini
    // yazmak yeterli.
    this.router.navigate(['/posts/detail'], { queryParams: { id } });
  }
}
