import { Controller, Get, UseGuards, Request } from '@nestjs/common';
import { GithubAuthGuard } from 'src/auth/github-auth.guard';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor(private userService: UsersService){}

    @UseGuards(JwtAuthGuard)
    @Get('profile')
    getProfile(@Request() req) {
        return req.user;
    }

    @UseGuards(GithubAuthGuard)
    @Get('github')
    getGithubProfile(@Request() req) {
        this.userService.getGithubUser(req);
    }
}
