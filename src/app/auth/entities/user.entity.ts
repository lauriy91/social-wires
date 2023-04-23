/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class UserBaseEntity{
    @PrimaryGeneratedColumn("uuid")
    readonly userId: number;

    @Column({
        unique: true
    })
    readonly username: string;

    @Column()
    readonly password: string;

    @Column({type: "timestamptz"})
    readonly created_at: Date;

    constructor(username: string, password: string) {
        this.username = username;
        this.password = password;
    }
}

@Entity()
export class UserSigninEntity{
    @PrimaryGeneratedColumn()
    readonly userId?: number;

    @Column({
        unique: true
    })
    readonly username: string;

    @Column()
    readonly password: string;

    constructor(username: string, password: string) {
        this.username = username;
        this.password = password;
    }
}

@Entity()
export class UserEntity {

    @PrimaryGeneratedColumn()
    readonly userId: number;

    @Column()
    readonly username: string;

    @Column({
        unique: true
    })
    readonly email: string;

    @Column()
    password?: string;

    @Column()
    readonly fullname: string;

    @Column({type: "timestamptz"})
    created_at?: Date;

    constructor(userId: number, username: string, email: string, password: string, fullname: string, created_at: Date) {
        this.userId = userId;
        this.username = username;
        this.email = email;
        this.password = password;
        this.fullname = fullname;
        this.created_at = created_at;
    }

}

export class SignupEntity {

    @PrimaryGeneratedColumn("uuid")
    userId: number;

    @Column({
        unique: true
    })
    readonly username: string;

    @Column({
        unique: true
    })
    readonly email: string;

    @Column()
    readonly password?: string;

    @Column()
    readonly fullname: string;

    @Column({type: "timestamptz"})
    readonly created_at?: Date;

    constructor(userId: number, username: string, email: string, fullname: string) {
        this.userId = userId;
        this.username = username;
        this.email = email;
        this.fullname = fullname;
    }

}
