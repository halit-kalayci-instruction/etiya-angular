import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PostForListingModel } from '../models/postForListingModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<PostForListingModel[]> {
    return this.httpClient.get<PostForListingModel[]>(
      'https://jsonplaceholder.typicode.com/posts'
    );
  }

  getById(id: number): Observable<PostForListingModel> {
    return this.httpClient.get<PostForListingModel>(
      'https://jsonplaceholder.typicode.com/posts/' + id
    );
  }
}
