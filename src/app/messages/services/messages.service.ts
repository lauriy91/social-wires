/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { MessagesRepository } from "@messagerepositories/message.repository";
import { MessagesMapper } from "@messagesEnts/messages.mapper";
import {
  PostMessageEntity,
  PostReactionEntity,
  PostCommentEntity
} from "@messagesEnts/messages.entity";
import {
  PostMessageDTO,
  PostReactionDTO,
  PostCommentDTO
} from "@messagesEnts/message.dto";

@Injectable()
export class MessagesService {
  constructor(
    private messagesRepository: MessagesRepository,
    private reactionsRepository: MessagesRepository,
    private commentsRepository: MessagesRepository,
    private mapper: MessagesMapper
  ) {}

  async newMessage(postMessageDTO: PostMessageDTO): Promise<PostMessageDTO> {
    const newMessage: PostMessageEntity = await this.messagesRepository.newMessage(postMessageDTO);
    return this.mapper.entityToDtoMessage(newMessage);
  }

  async getAllMessage(): Promise<PostMessageDTO[]> {
    const messages: PostMessageEntity[] = await this.messagesRepository.getAllMessage();
    return messages.map((message) => this.mapper.entityToDtoMessage(message));
  }

  async getMyMessage(me: string): Promise<PostMessageDTO> {
    const messages: PostMessageEntity[] = await this.messagesRepository.getMyMessage(me);
    return this.mapper.entityToDtoMessage(messages[me]);
    // return this.mapper.entityToDtoMessage(user => user.username === username);
  }

  async getMessageById(id: string): Promise<PostMessageDTO> {
    const message: PostMessageEntity = await this.messagesRepository.getMessageById(id);
    return this.mapper.entityToDtoMessage(message);
  }

  async deleteMessages(id: string): Promise<void> {
    await this.messagesRepository.deleteMessages(id);
  }

  async newReaction(postReactionDTO: PostReactionDTO, id: string): Promise<PostReactionDTO> {
    const newReaction: PostReactionEntity = await this.reactionsRepository.newReaction(postReactionDTO);
    return this.mapper.entityToDtoReaction(newReaction);
  }

  async newComment(postCommentDTO: PostCommentDTO, id: string): Promise<PostCommentDTO> {
    const newComment: PostCommentEntity = await this.commentsRepository.newComment(postCommentDTO);
    return this.mapper.entityToDtoComment(newComment);
  }

}
