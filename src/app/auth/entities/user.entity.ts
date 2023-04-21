/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'users'})
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

    // constructor(userId: string, username: string, password: string, created_at: Timestamp) {
    constructor(userId: number, username: string, password: string) {
        this.userId = userId;
        this.username = username;
        this.password = password;
        // this.created_at = created_at;
        console.log('Bienvenido ' + this.username);
    }
}

export class UserEntity {

    @PrimaryGeneratedColumn("uuid")
    readonly userId: number;

    @Column({
        unique: true
    })
    readonly username: string;

    @Column({
        unique: true
    })
    readonly email: string;

    @Column()
    readonly password: string;

    @Column()
    readonly fullname: string;

    @Column({type: "timestamptz"})
    readonly created_at: Date;

    // constructor(userId: string, username: string, email: string, password: string, fullname: string, created_at: Timestamp) {
    constructor(userId: number, username: string, email: string, password: string, fullname: string) {
        this.userId = userId;
        this.username = username;
        this.email = email;
        this.password = password;
        this.fullname = fullname;
        // this.created_at = created_at;
        console.log('Bienvenido ' + this.username);
    }

}
