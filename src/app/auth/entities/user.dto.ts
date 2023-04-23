/* eslint-disable prettier/prettier */
import { ApiProperty } from "@nestjs/swagger";
import {
  IsDate,
  IsEmail,
  MaxLength,
  MinLength
} from "@nestjs/class-validator";

export class UserBaseDTO {
  @ApiProperty()
  readonly userId?: number;

  @ApiProperty()
  @MinLength(3)
  readonly username: string;

  @ApiProperty()
  @MinLength(5)
  @MaxLength(10)
  readonly password?: string;

  constructor(userId: number, username: string, password: string) {
    this.userId = userId;
    this.username = username;
    this.password = password;
  }
}

export class UserSigninDTO {
  @ApiProperty()
  @MinLength(3)
  readonly username: string;

  @ApiProperty()
  @MinLength(5)
  @MaxLength(10)
  readonly password: string;

  constructor(username: string, password: string) {
    this.username = username;
    this.password = password;
  }
}

export class UserDTO extends UserBaseDTO {
  @ApiProperty()
  @IsEmail()
  readonly email: string;

  @ApiProperty()
  @MinLength(3)
  readonly fullname: string;

  @ApiProperty()
  readonly userId?: number;

  @ApiProperty()
  @MinLength(3)
  readonly username: string;

  @ApiProperty()
  @MinLength(5)
  @MaxLength(10)
  readonly password?: string;

  @ApiProperty()
  @IsDate()
  readonly created_at?: Date;

  constructor(
    userId: number,
    email: string,
    username: string,
    password: string,
    fullname: string,
    created_at: Date
  ) {
      super(userId, email, fullname);
    this.userId = userId;
    this.email = email;
    this.username = username;
    this.password = password;
    this.fullname = fullname;
    this.created_at = created_at;
  }
}

export class SignupDTO {
  @ApiProperty()
  @IsEmail()
  readonly email: string;

  @ApiProperty()
  @MinLength(3)
  readonly fullname: string;

  @ApiProperty()
  readonly userId: number;

  @ApiProperty()
  @MinLength(3)
  readonly username: string;

  @ApiProperty()
  @MinLength(5)
  @MaxLength(10)
  readonly password: string;

  @ApiProperty()
  @IsDate()
  readonly created_at?: Date;

  constructor(
    userId: number,
    username: string,
    email: string,
    fullname: string,
  ) {
    this.userId = userId
    this.username = username;
    this.email = email;
    this.fullname = fullname;
  }
}
