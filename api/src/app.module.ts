import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { User } from './users/user.entity';
import { UsersModule } from './users/users.module';

const config = new ConfigService()
@Module({
  imports: [AuthModule, UsersModule, ConfigModule.forRoot({isGlobal:true}), TypeOrmModule.forRoot({
    type: 'mysql',
    host: config.get('HOST'),
    port: config.get('PORT'),
    username: config.get('USERNAME'),
    password: config.get('PASSWORD'),
    database: config.get('DATABASE'),
    entities: [User],
    synchronize: true,
  }),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
