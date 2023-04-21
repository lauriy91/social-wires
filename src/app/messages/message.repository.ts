/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, Repository } from "typeorm";
import { MessagesMapper } from "./entities/messages.mapper";
import { PostCommentEntity, PostMessageEntity, PostReactionEntity } from "./entities/messages.entity";
import { PostCommentDTO, PostMessageDTO, PostReactionDTO } from "./entities/message.dto";

@Injectable()
export class MessagesRepository {
  constructor(
    @InjectRepository(PostMessageEntity)
    private messagesRepository: Repository<PostMessageEntity>,
    private reactionsRepository: Repository<PostReactionEntity>,
    private commentsRepository: Repository<PostCommentEntity>,
    private mapper: MessagesMapper
  ) {}

  newMessage(postMessageDTO: PostMessageDTO): Promise<PostMessageEntity> {
    const newMessage = this.mapper.dtoToEntityMessage(postMessageDTO);
    return this.messagesRepository.save(newMessage);
  }

  getAllMessage(): Promise<PostMessageEntity[]> {
    return this.messagesRepository.find();
  }

  getMyMessage(me: any): Promise<PostMessageEntity[]> {
    return this.messagesRepository.find(me);
  }

  getMessageById(id: any): Promise<PostMessageEntity> {
    return this.messagesRepository.findOne(id);
  }

  deleteMessages(id: any): Promise<DeleteResult> {
    return this.messagesRepository.delete(id);
  }

  newReaction(postReactionDTO: PostReactionDTO): Promise<PostReactionEntity> {
    const newReaction = this.mapper.dtoToEntityReaction(postReactionDTO);
    return this.reactionsRepository.save(newReaction);
  }

  newComment(postCommentDTO: PostCommentDTO): Promise<PostCommentEntity> {
    const newComment = this.mapper.dtoToEntityComment(postCommentDTO);
    return this.commentsRepository.save(newComment);
  }

}
