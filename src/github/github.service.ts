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
    return this.httpService
      .get(`${this.baseUrl}/users/${username}`)
      .pipe(map((response: AxiosResponse) => response.data));
  }
}
