import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginRequestModel } from '../models/loginRequestModel';
import { Observable } from 'rxjs';
import { LoginResponseModel } from '../models/loginResponseModel';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiUrl: string = 'https://dummyjson.com/';
  constructor(private httpClient: HttpClient) {}

  login(model: LoginRequestModel): Observable<LoginResponseModel> {
    return this.httpClient.post<LoginResponseModel>(
      this.apiUrl + 'auth/login',
      model
    );
  }
}
