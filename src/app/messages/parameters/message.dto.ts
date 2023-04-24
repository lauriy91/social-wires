/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString } from "@nestjs/class-validator";
import { ApiProperty } from "@nestjs/swagger";

// DTO of create messages
export class PostMessageDTO {
  @ApiProperty()
  readonly id?: string;

  @ApiProperty()
  readonly user?: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly title: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly content: string;

  @ApiProperty()
  comments?: string[];

  @ApiProperty()
  reactions?: string[];

  @ApiProperty()
  createdAt?: Date;

  constructor(
    id: string,
    user: string,
    title: string,
    text: string,
    comments: string[],
    reactions: string[],
    createdAt: Date
  ) {
    this.id = id;
    this.user = user;
    this.title = title;
    this.content = text;
    this.comments = comments;
    this.reactions = reactions;
    this.createdAt = createdAt;
  }
}

// DTO postComments
export class PostCommentDTO {
  @ApiProperty()
  readonly id?: string;

  @ApiProperty()
  user?: string;

  @ApiProperty()
  comments?: [
    {
      comment?: string;
      author?: string;
    }
  ];

  @ApiProperty()
  createdAt?: Date;

  constructor(id: string, user: string, comments: [{ comment?: string; author?: string }], createdAt: Date) {
    this.id = id;
    this.user = user;
    this.comments = comments;
    this.createdAt = createdAt;
  }
}

// DTO postReactions
export class PostReactionDTO {
  @ApiProperty()
  readonly id?: string;

  @ApiProperty()
  user?: string;

  @ApiProperty()
  reactions?: [
    {
      reaction?: string;
      author?: string;
    }
  ];

  @ApiProperty()
  createdAt?: Date;

  constructor(id: string, user: string, reactions: [{ reaction?: string; author?: string }], createdAt: Date) {
    this.id = id;
    this.user = user;
    this.reactions = reactions;
    this.createdAt = createdAt;
  }
}
