import { Controller, Get, Param, Query } from '@nestjs/common';
import { GithubService } from './github.service';
import { Observable } from 'rxjs';
import { AxiosResponse } from 'axios';

@Controller('github')
export class GithubController {
  constructor(private readonly githubService: GithubService) {}

  @Get('users/:username')
  getUser(@Param('username') username: string): Observable<AxiosResponse<any>> {
    return this.githubService.getUser(username);
  }

  @Get('users/:username/following')
  getUserFollowings(
    @Param('username') username: string,
    @Query('page') page: number = 1,
  ): Observable<AxiosResponse<any>> {
    return this.githubService.getUserFollowings(username, page);
  }
}
