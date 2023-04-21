/* eslint-disable prettier/prettier */
import {
	ApiBadRequestResponse,
	ApiForbiddenResponse,
	ApiInternalServerErrorResponse,
	ApiOkResponse,
    ApiCreatedResponse,
	ApiOperation,
	ApiTags,
	ApiUnauthorizedResponse
} from '@nestjs/swagger';
import { Body, Controller, Post } from '@nestjs/common';
import { UserBaseDTO, UserDTO } from '../entities/user.dto';
import { ErrorBaseResponse } from 'src/app/common/error.response';
import { UsersRepository } from '../auth.repository';

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
    constructor(private usersRepository: UsersRepository){}

    users: UserDTO[] = [];
    userbase: UserBaseDTO[] = [];

    @ApiOperation({
		summary: 'Create users ',
		description: 'Create users '
	})
	@ApiCreatedResponse({
		// type: PostJobPosting
	})
    @Post('signup')
    async signup(@Body() data: UserDTO) {
        const signup = {...data, userId: ''+(this.users.length)}
        this.users = [...this.users, signup];
        return await signup;
    }

    @ApiOperation({
		summary: 'Create users ',
		description: 'Create users '
	})
	@ApiCreatedResponse({
		// type: PostJobPosting
	})
    @Post('signup')
    async signuptest(@Body() data: UserDTO): Promise<UserDTO> {
        return await this.usersRepository.newUser(data);
    }

    @ApiOperation({
		summary: 'Signin users ',
		description: 'Signin users '
	})
	@ApiCreatedResponse({
		// type: PostJobPosting
	})
    @Post('signin')
    async signin(@Body() data: UserBaseDTO) {
        const signin = {...data, userId: ''+(this.userbase.length)}
        this.userbase = [...this.userbase, signin];
        return await signin;
    }
}
