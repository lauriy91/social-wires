/* eslint-disable prettier/prettier */
import {
  ApiBadRequestResponse,
  ApiForbiddenResponse,
  ApiInternalServerErrorResponse,
  ApiOperation,
  ApiTags,
  ApiUnauthorizedResponse,
  ApiOkResponse
  //   ApiBearerAuth
} from "@nestjs/swagger";
import {
  Body,
  Controller,
  Get,
  Post,
  //   UseGuards,
  Request
} from "@nestjs/common";
import { UsersService } from "@authServices/auth.service";
// import { AuthGuard } from "@common/auth.guard";
import { ErrorBaseResponse } from "@common/error.response";
import { SignupDTO, UserSigninDTO } from "@authEnts/user.dto";
import {
  BaseUserResponse,
  SigninResponse,
  SignupResponse,
  UsersResponse
} from "@authEnts/user.response";

// Paths and version project
@ApiTags("wires/auth")
@Controller({
  path: "wires/auth",
  version: "1"
})
// Erros responses
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
    type: BaseUserResponse
  })
  @Post("signup")
  async signup(@Body() data: SignupDTO): Promise<SignupResponse> {
    return await this.userService.newUser(data);
  }

  // Authentication area
  //   @ApiBearerAuth()
  //   @UseGuards(AuthGuard)
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
    summary: "Signout users ",
    description: "Signout users "
  })
  @ApiOkResponse({
    type: "The user session has ended"
  })
  @Get("signout")
  logout(@Request() req): any {
    req.session.destroy();
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
