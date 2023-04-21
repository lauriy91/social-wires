/* eslint-disable prettier/prettier */
import { ApiProperty } from "@nestjs/swagger";
import {
  IsDate,
  IsEmail,
  IsUUID,
  MaxLength,
  MinLength
} from "@nestjs/class-validator";
import { Timestamp } from "typeorm";

export class UserBaseDTO {
  @ApiProperty()
  @IsUUID()
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
  readonly created_at?: Timestamp;

  // constructor(userId: string, username: string, password: string, created_at: Timestamp) {
  constructor(userId: number, username: string, password: string) {
    this.userId = userId;
    this.username = username;
    this.password = password;
    // this.created_at = created_at;
    console.log("Bienvenido " + this.username);
  }
}

export class UserDTO extends UserBaseDTO {
  @ApiProperty()
  @IsEmail()
  readonly email: string;

  @ApiProperty()
  @MinLength(3)
  readonly fullname: string;

  // constructor(userId: string, username: string, password: string, created_at: Timestamp) {
  constructor(
    userId: number,
    email: string,
    // username: string,
    // password: string,
    fullname: string,
  ) {
      super(userId, email, fullname);
    // this.userId = userId;
    this.email = email;
    // this.username = username;
    // this.password = password;
    this.fullname = fullname;
    // this.created_at = created_at;
    console.log("Bienvenido " + this.email);
  }
}
