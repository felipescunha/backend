import { Controller, Get, Param } from '@nestjs/common';
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
}
