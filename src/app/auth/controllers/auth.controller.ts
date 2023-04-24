/* eslint-disable prettier/prettier */
import { SignupDTO, UserSigninDTO } from "@authrepositories/parameters/user.dto";
import {
  LogoutResponse,
  SigninResponse,
  SignupResponse,
  UsersResponse
} from "@authrepositories/parameters/user.response";
import { UsersService } from "@authServices/auth.service";
import { AuthGuard } from "@common/security/auth.guard";
import { ErrorBaseResponse } from "@common/exception/error.response";
import {
  Body,
  Controller,
  Get,
  Post,
  Request,
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

// Paths and version project
@ApiTags("wires/auth")
@Controller({
  path: "wires/auth",
  version: "1"
})
// Errors responses
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

// User Controller
export class AuthController {
  constructor(private userService: UsersService) {}

  @ApiOperation({
    summary: "Create users ",
    description: "Create users "
  })
  @ApiOkResponse({
    type: SignupResponse
  })
  @Post("signup")
  async signup(@Body() data: SignupDTO): Promise<SignupResponse> {
    return await this.userService.newUser(data);
  }

  // Authentication area
  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @ApiOperation({
    summary: "Signin users ",
    description: "Signin users "
  })
  @ApiOkResponse({
    type: SigninResponse
  })
  @Post("signin")
  async signin(@Body() data: UserSigninDTO): Promise<SigninResponse> {
    return await this.userService.signinUser(data);
  }

  @ApiOperation({
    summary: "Logout users ",
    description: "Logout users "
  })
  @ApiOkResponse({
    type: LogoutResponse
  })
  @Get("signout")
  async logout(@Request() req) {
    req.destroy();
    return { msg: "The user session has ended" };
  }

  @ApiOperation({
    summary: "Return all users registers ",
    description: "Return all users registers "
  })
  @ApiOkResponse({
    type: UsersResponse
  })
  @Get()
  async getAllUsers(): Promise<UsersResponse[]> {
    return await this.userService.users();
  }
}
