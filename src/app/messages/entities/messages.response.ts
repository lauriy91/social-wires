/* eslint-disable prettier/prettier */
import { ApiProperty } from "@nestjs/swagger";

export class BaseMessagesResponse {
  @ApiProperty()
  id: string;

  @ApiProperty()
  title: string;

  @ApiProperty()
  text: string;

  @ApiProperty()
  comments: [];

  @ApiProperty()
  reactions: [];

  @ApiProperty()
  createdAt: Date;
}

export class MessageCreateResponse extends BaseMessagesResponse {
  @ApiProperty()
  user: string;
}

export class ReactionAuthorResponse {
    @ApiProperty()
    reaction: string;
  
    @ApiProperty()
    author: string;
}

export class CommentAuthorResponse {
    @ApiProperty()
    comment: string;
  
    @ApiProperty()
    author: string;
}

export class ReactionResponse {
    @ApiProperty()
    id: string;
  
    @ApiProperty()
    title: string;
  
    @ApiProperty()
    text: string;
  
    @ApiProperty()
    comments: [];
  
    @ApiProperty()
    reactions: [ReactionAuthorResponse];
  
    @ApiProperty()
    createdAt: Date;
}
export class CommentResponse {
    @ApiProperty()
    id: string;
  
    @ApiProperty()
    title: string;
  
    @ApiProperty()
    text: string;
  
    @ApiProperty()
    comments: [];
  
    @ApiProperty()
    reactions: [CommentAuthorResponse];
  
    @ApiProperty()
    createdAt: Date;
}

export class MessagesDeletedResponse {
  @ApiProperty()
  delete: boolean;

  @ApiProperty()
  status: string;
}
