/* eslint-disable prettier/prettier */
import { SignupDTO, UserSigninDTO } from "@authrepositories/parameters/user.dto";
import { SignupEntity } from "@authrepositories/parameters/user.entity";
import { UserMapper } from "@authrepositories/parameters/user.mapper";
import { UsersRepository } from "@authrepositories/repositories/auth.repository";
import {
  SigninResponse,
  SignupResponse
} from "@authrepositories/parameters/user.response";
import { HttpException, Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { compare, hash } from "bcrypt";

@Injectable()
export class UsersService {
  constructor(
    private usersRepository: UsersRepository,
    private mapper: UserMapper,
    private jwtService: JwtService
  ) {}

  // Create new users with password validation
  async newUser(userDTO: SignupDTO): Promise<SignupResponse> {
    // Send body data
    const newUser: SignupEntity = await this.usersRepository.newUser(userDTO);

    // Encript password
    const { password } = userDTO;
    const plainToHash = await hash(password, 8);
    userDTO = { ...userDTO, password: plainToHash };

    // Create user
    return this.mapper.entitySignupToDto(newUser);
  }
  // End region Create new users

  // Signin users with exist users validations
  async signinUser(userSigninDTO: UserSigninDTO): Promise<SigninResponse> {
    // Verify if the user exist
    const { password } = userSigninDTO;
    const findUser = await this.usersRepository.signinUser(userSigninDTO);
    if (!findUser) throw new HttpException("USER NOT FOUND", 404);

    // verify if the password is correct
    const checkPassword = await compare(password, findUser.password);
    if (checkPassword) throw new HttpException("PASSWORD INCORRECT", 403);

    const payload = { username: findUser.username };
    const token = this.jwtService.sign(payload);
    const expiresIn = "24h";

    return {
      access_token: token,
      expires_in: expiresIn,
      message: "Successfully logged in",
      status: true
    };
  }
  // End region login users

  // Get users registered in the app
  async users() {
    const users = await this.usersRepository.getAllUsers();
    return users;
  }
  // End region get all users
}
