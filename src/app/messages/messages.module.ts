/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { MessagesController } from "@messagesController/messages.controller";
import { MessagesService } from "@messagesServices/messages.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import {
  PostCommentEntity,
  PostMessageEntity,
  PostReactionEntity
} from "@messagerepositories/parameters/messages.entity";
import { MessagesRepository } from "@messagerepositories/repositories/message.repository";
import { MessagesMapper } from "@messagerepositories/parameters/messages.mapper";
import { JwtModule } from "@nestjs/jwt";
import { jwtConstants } from "@common/security/constants";

@Module({
  imports: [
    TypeOrmModule.forFeature([
      PostMessageEntity,
      PostReactionEntity,
      PostCommentEntity
    ]),
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '24h' },
    }),
  ],
  controllers: [MessagesController],
  providers: [MessagesService, MessagesRepository, MessagesMapper]
})
export class MessagesModule {}
