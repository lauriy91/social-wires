/* eslint-disable prettier/prettier */
import { ApiProperty } from "@nestjs/swagger";
import { Timestamp } from "typeorm";

export class UserBaseDTO {
    @ApiProperty()
    readonly userId?: string;

    @ApiProperty()
    readonly username: string;

    @ApiProperty()
    readonly password: string;

    @ApiProperty()
    readonly created_at: Timestamp;

    constructor(userId: string, username: string, password: string, created_at: Timestamp) {
        this.userId = userId;
        this.username = username;
        this.password = password;
        this.created_at = created_at;
    }
}

export class UserDTO {
    @ApiProperty()
    readonly userId?: string;

    @ApiProperty()
    readonly username: string;

    @ApiProperty()
    readonly email: string;

    @ApiProperty()
    readonly password: string;

    @ApiProperty()
    readonly fullname: string;

    @ApiProperty()
    readonly created_at: Timestamp;

    constructor(userId: string, username: string, email: string, password: string, fullname: string, created_at: Timestamp) {
        this.userId = userId;
        this.username = username;
        this.email = email;
        this.password = password;
        this.fullname = fullname;
        this.created_at = created_at;
    }
}