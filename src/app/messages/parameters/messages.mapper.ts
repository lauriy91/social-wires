/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { PostCommentDTO, PostMessageDTO, PostReactionDTO } from "./message.dto";
import {
  PostCommentEntity,
  PostMessageEntity,
  PostReactionEntity
} from "./messages.entity";

@Injectable()

// This method convert from entity to dto and vice versa
export class MessagesMapper {
  //DTO to entity convert new message
  dtoToEntityMessage(postMessageDTO: PostMessageDTO): PostMessageEntity {
    return new PostMessageEntity(
      postMessageDTO.id,
      postMessageDTO.user,
      postMessageDTO.content,
      postMessageDTO.title,
      postMessageDTO.comments,
      postMessageDTO.reactions,
      postMessageDTO.createdAt
    );
  }

  // DTO to entity convert reactions
  dtoToEntityReaction(postReactionDTO: PostReactionDTO): PostReactionEntity {
    return new PostReactionEntity(
      postReactionDTO.id,
      postReactionDTO.user,
      postReactionDTO.reactions,
      postReactionDTO.createdAt
    );
  }

  //   DTO to entity convert comments
  dtoToEntityComment(postCommentDTO: PostCommentDTO): PostCommentEntity {
    return new PostCommentEntity(postCommentDTO.id, postCommentDTO.user, postCommentDTO.comments, postCommentDTO.createdAt);
  }

  //   Entity to DTO convert new messages
  entityToDtoMessage(postMessageEntity: PostMessageEntity): PostMessageDTO {
    return new PostMessageDTO(
      postMessageEntity.id,
      postMessageEntity.user,
      postMessageEntity.content,
      postMessageEntity.title,
      postMessageEntity.comments,
      postMessageEntity.reactions,
      postMessageEntity.createdAt
    );
  }

  // Entity to DTO convert reactions
  entityToDtoReaction(postReactionEntity: PostReactionEntity): PostReactionDTO {
    return new PostReactionDTO(
      postReactionEntity.id,
      postReactionEntity.user,
      postReactionEntity.reactions,
      postReactionEntity.createdAt
    );
  }

  //   Entity to DTO convert comments
  entityToDtoComment(postCommentEntity: PostCommentEntity): PostCommentDTO {
    return new PostCommentDTO(postCommentEntity.id, postCommentEntity.user, postCommentEntity.comments, postCommentEntity.createdAt);
  }
}
