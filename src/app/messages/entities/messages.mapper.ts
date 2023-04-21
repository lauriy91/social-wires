/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { PostCommentDTO, PostMessageDTO, PostReactionDTO } from "./message.dto";
import { PostCommentEntity, PostMessageEntity, PostReactionEntity } from "./messages.entity";

@Injectable()

// This method convert from entity to dto and vice versa
export class MessagesMapper {

    dtoToEntityMessage(postMessageDTO: PostMessageDTO): PostMessageEntity {
        return new PostMessageEntity(postMessageDTO.content, postMessageDTO.title);
    }

    dtoToEntityReaction(postReactionDTO: PostReactionDTO): PostReactionEntity {
        return new PostReactionEntity(postReactionDTO.author, postReactionDTO.reaction);
    }

    dtoToEntityComment(postCommentDTO: PostCommentDTO): PostCommentEntity {
        return new PostCommentEntity(postCommentDTO.author, postCommentDTO.comment);
    }

    entityToDtoMessage(postMessageEntity: PostMessageEntity): PostMessageDTO {
        return new PostMessageDTO(postMessageEntity.content, postMessageEntity.title);
    }

    entityToDtoReaction(postReactionEntity: PostReactionEntity): PostReactionDTO {
        return new PostReactionDTO(postReactionEntity.author, postReactionEntity.reaction);
    }

    entityToDtoComment(postCommentEntity: PostCommentEntity): PostCommentDTO {
        return new PostCommentDTO(postCommentEntity.author, postCommentEntity.comment);
    }

}
