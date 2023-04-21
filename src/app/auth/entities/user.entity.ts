/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn, Timestamp } from "typeorm";

@Entity('users')
export class UserBaseEntity{
    @PrimaryGeneratedColumn("uuid")
    readonly userId: string;

    @Column({
        unique: true
    })
    readonly username: string;

    @Column()
    readonly password: string;

    @Column()
    readonly created_at: Timestamp;

    constructor(userId: string, username: string, password: string, created_at: Timestamp) {
        this.userId = userId;
        this.username = username;
        this.password = password;
        this.created_at = created_at;
        console.log('Bienvenido ' + this.username);
    }
}

@Entity('users')
export class UserEntity {

    @PrimaryGeneratedColumn("uuid")
    readonly userId: string;

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

    @Column()
    readonly created_at: Timestamp;

    constructor(userId: string, username: string, email: string, password: string, fullname: string, created_at: Timestamp) {
        this.userId = userId;
        this.username = username;
        this.email = email;
        this.password = password;
        this.fullname = fullname;
        this.created_at = created_at;
        console.log('Bienvenido ' + this.username);
    }

}
