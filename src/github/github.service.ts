import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class GithubService {
  private readonly baseUrl: string = 'https://api.github.com';

  constructor(private readonly httpService: HttpService) {}

  getUser(username: string): Observable<any> {
    console.log(`${this.baseUrl}/users/${username}`);
    return this.httpService
      .get(`${this.baseUrl}/users/${username}`)
      .pipe(map((response: AxiosResponse) => response.data));
  }

  getUserFollowings(username: string, page: number): Observable<any> {
    console.log(`${this.baseUrl}/users/${username}/following?page=${page}`);
    return this.httpService
      .get(`${this.baseUrl}/users/${username}/following?page=${page}`)
      .pipe(map((response: AxiosResponse) => response.data));
  }
}
