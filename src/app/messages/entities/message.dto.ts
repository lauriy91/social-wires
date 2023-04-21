/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString } from "@nestjs/class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class PostMessageDTO {
    @ApiProperty()
    @IsString()
	@IsNotEmpty()
    readonly title: string;

    @ApiProperty()
    @IsString()
    readonly content: string;

    constructor(title: string, content: string) {
        this.title = title;
        this.content = content;
    }
}

export class PostReactionDTO {
    @ApiProperty()
    readonly reaction: string;

    @ApiProperty()
    @IsString()
    readonly author: string;

    constructor(reaction: string, author: string) {
        this.reaction = reaction;
        this.author = author;
    }
}

export class PostCommentDTO {
    @ApiProperty()
    readonly comment: string;

    @ApiProperty()
    @IsString()
    readonly author: string;

    constructor(comment: string, author: string) {
        this.comment = comment;
        this.author = author;
    }
}