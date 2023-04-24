/* eslint-disable prettier/prettier */
import {
  PostCommentDTO,
  PostMessageDTO,
  PostReactionDTO,
} from "@messagerepositories/parameters/message.dto";
import {
  PostCommentEntity,
  PostMessageEntity,
  PostReactionEntity
} from "@messagerepositories/parameters/messages.entity";
import { MessagesMapper } from "@messagerepositories/parameters/messages.mapper";
import {
  BaseMessagesResponse,
  MessagesDeletedResponse
} from "@messagerepositories/parameters/messages.response";
import { MessagesRepository } from "@messagerepositories/repositories/message.repository";
import { Injectable } from "@nestjs/common";

@Injectable()
export class MessagesService {
  constructor(
    private messagesRepository: MessagesRepository,
    private reactionsRepository: MessagesRepository,
    private commentsRepository: MessagesRepository,
    private mapper: MessagesMapper
  ) {}

  // Create new messages method
  async newMessage(
    postMessageDTO: PostMessageDTO
  ): Promise<BaseMessagesResponse> {
    const newMessage: PostMessageEntity =
      await this.messagesRepository.newMessage(postMessageDTO);
    return this.mapper.entityToDtoMessage(newMessage);
  }

  // Get all messages registereds method
  async getAllMessage(): Promise<BaseMessagesResponse[]> {
    const messages: PostMessageEntity[] =
      await this.messagesRepository.getAllMessage();
    return messages.map((message) => this.mapper.entityToDtoMessage(message));
  }

  // Get my messages method
  async getMyMessage(user: string) {
    const message = await this.messagesRepository.getMessageById(user);
    return message;
  }

  // Get messages by id method
  async getMessageById(id: string) {
    const message = await this.messagesRepository.getMessageById(id);
    return message;
  }

  // Delete messages by id method
  async deleteMessages(id: string): Promise<MessagesDeletedResponse> {
    await this.messagesRepository.deleteMessages(id);
    return { delete: true, status: "OK" };
  }

  // Make reactions method
  async newReaction(
    id: string,
    postReactionDTO: PostReactionDTO
  ): Promise<PostReactionEntity> {
    const newReaction: PostReactionEntity =
      await this.reactionsRepository.newReaction(id, postReactionDTO);
    return this.mapper.entityToDtoReaction(newReaction);
  }

  // Make comments method
  async newComment(
    id: string,
    postCommentDTO: PostCommentDTO
  ): Promise<PostCommentDTO> {
    const newComment: PostCommentEntity =
      await this.commentsRepository.newComment(id, postCommentDTO);
    return this.mapper.entityToDtoComment(newComment);
  }
}
