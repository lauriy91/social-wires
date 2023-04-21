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

export class SigninResponse {
  @ApiProperty()
  access_token: string;

  @ApiProperty()
  expires_in: number;

  @ApiProperty()
  message: string;

  @ApiProperty()
  status: boolean;
}
