/* eslint-disable prettier/prettier */
import { ErrorBaseResponse } from "@common/exception/error.response";
import { AuthGuard } from "@common/security/auth.guard";
import {
  PostCommentDTO,
  PostMessageDTO,
  PostReactionDTO
} from "@messagerepositories/parameters/message.dto";
import {
  BaseMessagesResponse,
  CommentResponse,
  MessagesDeletedResponse,
  ReactionResponse
} from "@messagerepositories/parameters/messages.response";
import { MessagesService } from "@messagesServices/messages.service";
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards
} from "@nestjs/common";
import {
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiForbiddenResponse,
  ApiInternalServerErrorResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
  ApiUnauthorizedResponse
} from "@nestjs/swagger";

@ApiBearerAuth()
@UseGuards(AuthGuard)
@ApiTags("wires/messages")
@Controller({
  path: "wires/messages",
  version: "1"
})
@ApiUnauthorizedResponse({
  description: "Unauthorized",
  type: ErrorBaseResponse
})
@ApiForbiddenResponse({
  description: "Forbidden",
  type: ErrorBaseResponse
})
@ApiBadRequestResponse({
  description: "Bad Request",
  type: ErrorBaseResponse
})
@ApiInternalServerErrorResponse({
  description: "Internal Server Error",
  type: ErrorBaseResponse
})
export class MessagesController {
  constructor(private messagesService: MessagesService) {}

  @ApiOperation({
    summary: "Create messages ",
    description: "Create messages "
  })
  @ApiOkResponse({
    type: BaseMessagesResponse
  })
  @Post()
  async postMessages(
    @Body() data: PostMessageDTO
  ): Promise<BaseMessagesResponse> {
    return await this.messagesService.newMessage(data);
  }

  @ApiOperation({
    summary: "Get all messages ",
    description: "Get all messages "
  })
  @ApiOkResponse({
    type: BaseMessagesResponse
  })
  @Get()
  async getAllMessages(): Promise<BaseMessagesResponse[]> {
    return await this.messagesService.getAllMessage();
  }

  @ApiOperation({
    summary: "Get all my messages ",
    description: "Get all my messages "
  })
  @ApiOkResponse({
    type: BaseMessagesResponse
  })
  @Get("user")
  async getMyMessages(@Param("user") user: string): Promise<BaseMessagesResponse> {
    return await this.messagesService.getMyMessage(user);
  }

  @ApiOperation({
    summary: "Get messages by id",
    description: "Get messages by id"
  })
  @ApiOkResponse({
    type: BaseMessagesResponse
  })
  @Get(":id")
  async getMessageById(@Param("id") id: string): Promise<BaseMessagesResponse> {
    return await this.messagesService.getMessageById(id);
  }

  @ApiOperation({
    summary: "Delete messages by id",
    description: "Delete messages by id"
  })
  @ApiOkResponse({
    type: MessagesDeletedResponse
  })
  @Delete(":id")
  async deleteUser(@Param("id") id: string): Promise<MessagesDeletedResponse> {
    return await this.messagesService.deleteMessages(id);
  }

  @ApiOperation({
    summary: "Create reactions on messages ",
    description: "Create reactions on messages "
  })
  @ApiOkResponse({
    type: ReactionResponse
  })
  @Patch("reaction/:id")
  async newReaction(@Param("id") id: string, @Body() data: PostReactionDTO) {
    return await this.messagesService.newReaction(id, data);
  }

  @ApiOperation({
    summary: "Create comments on messages ",
    description: "Create comments on messages "
  })
  @ApiOkResponse({
    type: CommentResponse
  })
  @Patch("comment/:id")
  async newComment(@Param("id") id: string, @Body() data: PostCommentDTO) {
    return await this.messagesService.newComment(id, data);
  }
}
