/* eslint-disable prettier/prettier */
import {
	ApiBadRequestResponse,
	ApiForbiddenResponse,
	ApiInternalServerErrorResponse,
	ApiOkResponse,
	ApiOperation,
	ApiTags,
	ApiUnauthorizedResponse
} from '@nestjs/swagger';
import { Body, Controller, Post } from '@nestjs/common';
import { UserBaseDTO, UserDTO } from '../entities/user.dto';
import { ErrorBaseResponse } from 'src/app/common/error.response';

@ApiTags('wires')
@Controller({
	path: 'wires/auth',
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

export class AuthController {

    users: UserDTO[] = [];
    userbase: UserBaseDTO[] = [];

    @Post()
    signup(@Body() user: UserDTO): UserDTO {
        const signup = {...user, userId: ''+(this.users.length)}
        this.users = [...this.users, signup];
        return signup;
    }

    @Post()
    signin(@Body() user: UserBaseDTO): UserBaseDTO {
        const signin = {...user, userId: ''+(this.userbase.length)}
        this.userbase = [...this.userbase, signin];
        return signin;
    }
}
