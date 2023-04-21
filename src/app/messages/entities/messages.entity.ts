/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('messages')
export class PostMessageEntity{
    @Column()
    readonly title: string;

    @Column()
    readonly content: string;

    constructor(title: string, content: string) {
        this.title = title;
        this.content = content;
        console.log('Titulo: ' + this.title);
    }
}

@Entity('reaction')
export class PostReactionEntity {
    @Column()
    readonly reaction: string;

    @Column()
    readonly author: string;

    constructor(reaction: string, author: string) {
        this.reaction = reaction;
        this.author = author;
        console.log('its cool ' + this.author);
    }

}

@Entity('comment')
export class PostCommentEntity {
    @Column()
    readonly comment: string;

    @Column()
    readonly author: string;

    constructor(comment: string, author: string) {
        this.comment = comment;
        this.author = author;
        console.log('its cool ' + this.author);
    }

}
