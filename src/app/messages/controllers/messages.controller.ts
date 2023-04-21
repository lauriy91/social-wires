/* eslint-disable prettier/prettier */
import {
	ApiBadRequestResponse,
	ApiForbiddenResponse,
	ApiInternalServerErrorResponse,
	ApiOperation,
	ApiTags,
	ApiUnauthorizedResponse,
	ApiBearerAuth,
	ApiOkResponse
} from '@nestjs/swagger';
import { Body, Controller, Get, Param, Post, Delete, UseGuards } from '@nestjs/common';
import { ErrorBaseResponse } from '@common/error.response';
import { PostMessageDTO } from '@messagesEnts/message.dto';
import { MessagesService } from '@messagesServices/messages.service';
import { AuthGuard } from '@common/auth.guard';
import { BaseMessagesResponse, MessageCreateResponse, MessagesDeletedResponse } from '@messagesEnts/messages.response';

@ApiBearerAuth()
@UseGuards(AuthGuard)
@ApiTags('wires/messages')
@Controller({
	path: 'wires/messages',
	version: '1'
})
@ApiUnauthorizedResponse({
	description: 'Unauthorized',
	type: ErrorBaseResponse
})
@ApiForbiddenResponse({
	description: 'Forbidden',
	type: ErrorBaseResponse
})
@ApiBadRequestResponse({
	description: 'Bad Request',
	type: ErrorBaseResponse
})
@ApiInternalServerErrorResponse({
	description: 'Internal Server Error',
	type: ErrorBaseResponse
})

export class MessagesController {
    constructor(private messagesService: MessagesService){}

    @ApiOperation({
		summary: 'Create messages ',
		description: 'Create messages '
	})
	@ApiOkResponse({
		type: MessageCreateResponse
	})
    @Post()
    async postMessages(@Body() data: PostMessageDTO): Promise<PostMessageDTO> {
        return await this.messagesService.newMessage(data);
    }

	@ApiOperation({
		summary: 'Get all messages ',
		description: 'Get all messages '
	})
	@ApiOkResponse({
		type: BaseMessagesResponse
	})
	@Get()
    async getAllMessages(): Promise<PostMessageDTO[]> {
        return await this.messagesService.getAllMessage();
    }

	@ApiOperation({
		summary: 'Get all my messages ',
		description: 'Get all my messages '
	})
	@ApiOkResponse({
		type: BaseMessagesResponse
	})
	// @Get('me')
    // async getMyMessages(): Promise<PostMessageDTO> {
    //     return await this.messagesService.getMyMessage();
    // }

	@ApiOperation({
		summary: 'Get messages by id',
		description: 'Get messages by id'
	})
	@ApiOkResponse({
		type: BaseMessagesResponse
	})
	@Get('me/:id')
    async getMessageById(@Param('id') id: string): Promise<PostMessageDTO> {
        return await this.messagesService.getMessageById(id);
    }

	@ApiOperation({
		summary: 'Delete messages by id',
		description: 'Delete messages by id'
	})
	@ApiOkResponse({
		type: MessagesDeletedResponse
	})
	@Delete(':id')
    async deleteUser(@Param('id') id: string): Promise<void> {
        return await this.messagesService.deleteMessages(id);
    }

	// @ApiOperation({
	// 	summary: 'Create reactions on messages ',
	// 	description: 'Create reactions on messages '
	// })
	// @ApiOkResponse({
	// 	// type: ReactionResponse
	// })
	// @Patch('reaction/:id')
	// async newReaction(@Param('id', ParseIntPipe) id: number) {
	// 	return await this.messagesService.newReaction(id);
	// }

	// @ApiOperation({
	// 	summary: 'Create comments on messages ',
	// 	description: 'Create comments on messages '
	// })
	// @ApiOkResponse({
	// 	// type: CommentResponse
	// })
	// @Patch('comment/:id')
	// async newComment(@Param('id', ParseIntPipe) id: number) {
	// 	return await this.messagesService.newComment(id);
	// }

    
}




    // ./src/comments/comment.controller.ts
    
    // import { Controller, Post, Res, Body, HttpStatus } from '@nestjs/common';
    // import { CommentService } from './comment.service';
    
    // @Controller('comment')
    // export class CommentController {
    //     constructor(private commentService: CommentService){}
    //   @Post()
    //   postMessage(@Res() res, @Body() data ) {
    //       this.commentService.addComment(data)
    //       res.status(HttpStatus.OK).send("Comment posted successfully")
    //   }
    // }

