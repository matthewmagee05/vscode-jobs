
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Strategy } from 'passport-github2';

@Injectable()
export class GithubStrategy extends PassportStrategy(Strategy) {
  
    constructor(private configService: ConfigService) {
        super({
                clientID: configService.get('GITHUB_CLIENT_ID'),
                clientSecret: configService.get('GITHUB_CLIENT_SECRET'),
                callbackURL: configService.get('http://localhost:3000/auth/github/callback')
            });

    }

  async validate(payload: any) {
    return { userId: payload.sub, username: payload.username };
  }
}