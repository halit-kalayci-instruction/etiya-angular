import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { PostForListingModel } from 'src/app/features/post/models/postForListingModel';
import { PostService } from 'src/app/features/post/services/post.service';

@Component({
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent implements OnInit {
  postList: PostForListingModel[] = [];
  searchKey: string = '';

  // sayfa yüklendiğinde WEB API'den aldığımız cevabı postList değişkenine atayacağız.

  constructor(
    private postService: PostService,
    private router: Router,
    private translateService: TranslateService
  ) {}
  ngOnInit(): void {
    this.fetchPosts();

    this.translateService.get('helloText').subscribe((translate) => {
      console.log('Typescript tarafından alınan çeviri:', translate);
    });
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
