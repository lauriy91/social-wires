/* eslint-disable prettier/prettier */
import { ApiProperty } from "@nestjs/swagger";
import {IsDate, IsEmail, IsUUID, MaxLength, MinLength} from '@nestjs/class-validator'
import { Timestamp } from "typeorm";

export class UserBaseDTO {
    @ApiProperty()
    @IsUUID()
    readonly userId?: string;

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
}

export class UserDTO extends UserBaseDTO {
    @ApiProperty()
    @IsEmail()
    readonly email: string;

    @ApiProperty()
    @MinLength(3)
    readonly fullname: string;
}