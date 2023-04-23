/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from '@authController/auth.controller';
import { SignupEntity, UserBaseEntity, UserEntity, UserSigninEntity } from '@authEnts/user.entity';
import { UserMapper } from '@authEnts/user.mapper';
import { UsersRepository } from '@authrepositories/auth.repository';
import { UsersService } from '@authServices/auth.service';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from '@common/constants';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserBaseEntity, UserEntity, SignupEntity, UserSigninEntity ]),
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '24h' },
    }),
  ],
  controllers: [AuthController],
  providers: [UsersService, UserMapper, UsersRepository],
})
export class AuthModule {}
