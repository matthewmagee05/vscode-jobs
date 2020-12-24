import {ConfigService} from '@nestjs/config'
let configService = new ConfigService();
export const jwtConstants = {
    secret: configService.get('SECRET_KEY')
  };

