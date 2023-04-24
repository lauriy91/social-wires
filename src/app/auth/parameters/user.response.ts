/* eslint-disable prettier/prettier */
import { ApiProperty } from "@nestjs/swagger";

export class BaseUserResponse {
  @ApiProperty()
  userId: string;

  @ApiProperty()
  username: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  fullname: string;
}

export class SignupResponse {
  @ApiProperty()
  userId: number;

  @ApiProperty()
  username: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  fullname: string;
}

export class SigninResponse {
  @ApiProperty()
  access_token: string;

  @ApiProperty()
  expires_in: any;

  @ApiProperty()
  message: string;

  @ApiProperty()
  status: boolean;
}

export class LogoutResponse {
  @ApiProperty()
  message: string;
}

export class UsersResponse {
  @ApiProperty()
  userId?: number;

  @ApiProperty()
  username: string;

  @ApiProperty()
  email: string;
}
