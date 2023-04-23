/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'messages'})
export class PostMessageEntity{
    @PrimaryGeneratedColumn("uuid")
    readonly id: number;

    @Column()
    readonly title: string;

    @Column()
    readonly content: string;

    // @Column({type: "timestamptz"})
    // readonly created_at: Date;

    constructor(title: string, content: string) {
        this.title = title;
        this.content = content;
    }
}

export class PostReactionEntity {
    @Column()
    readonly reaction: string;

    @Column()
    readonly author: string;

    constructor(reaction: string, author: string) {
        this.reaction = reaction;
        this.author = author;
    }

}

export class PostCommentEntity {
    @Column()
    readonly comment: string;

    @Column()
    readonly author: string;

    constructor(comment: string, author: string) {
        this.comment = comment;
        this.author = author;
    }

}
