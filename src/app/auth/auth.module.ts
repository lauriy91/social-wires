/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from './controllers/auth.controller';
import { UserEntity } from './entities/user.entity';
import { UserMapper } from './entities/user.mapper';
import { UsersRepository } from './auth.repository';
import { UsersService } from './services/auth.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity])
  ],
  controllers: [AuthController],
  providers: [UsersService, UserMapper, UsersRepository],
})
export class AuthModule {}
