/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, Repository } from "typeorm";
import {
  PostCommentDTO,
  PostMessageDTO,
  PostReactionDTO
} from "../parameters/message.dto";
import {
  PostCommentEntity,
  PostMessageEntity,
  PostReactionEntity
} from "../parameters/messages.entity";
import { MessagesMapper } from "../parameters/messages.mapper";

@Injectable()
export class MessagesRepository {
  constructor(
    @InjectRepository(PostMessageEntity)
    private messagesRepository: Repository<PostMessageEntity>,
    @InjectRepository(PostReactionEntity)
    private reactionsRepository: Repository<PostReactionEntity>,
    @InjectRepository(PostCommentEntity)
    private commentsRepository: Repository<PostCommentEntity>,
    private mapper: MessagesMapper
  ) {}

  //  Save new messages on db
  newMessage(postMessageDTO: PostMessageDTO): Promise<PostMessageEntity> {
    const newMessage = this.mapper.dtoToEntityMessage(postMessageDTO);
    return this.messagesRepository.save(newMessage);
  }

  // Extract all messages of db
  getAllMessage(): Promise<PostMessageEntity[]> {
    return this.messagesRepository.find();
  }

  // Extract my messages of db
  getMyMessage(me: any): Promise<PostMessageEntity[]> {
    return this.messagesRepository.find(me);
  }

  // Extract all messages by id of db
  async getMessageById(id: string) {
    const message = await this.messagesRepository.findOneBy({ id });
    return message;
  }

  // Delete messages of db
  deleteMessages(id: string): Promise<DeleteResult> {
    return this.messagesRepository.delete(id);
  }

  // Save reactions
  async newReaction(
    id: string,
    postReactionDTO: PostReactionDTO
  ): Promise<PostReactionEntity> {
    postReactionDTO.user = id;
    const newReaction = await this.mapper.dtoToEntityReaction(postReactionDTO);
    return this.reactionsRepository.save(newReaction);
  }

  // Save comments
  async newComment(
    id: string,
    postCommentDTO: PostCommentDTO
  ): Promise<PostCommentEntity> {
    postCommentDTO.user = id;
    const newComment = await this.mapper.dtoToEntityComment(postCommentDTO);
    return this.commentsRepository.save(newComment);
  }
}
