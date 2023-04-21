/* eslint-disable prettier/prettier */

import { HttpException, Injectable } from "@nestjs/common";
import { UserBaseDTO, UserDTO } from "@authEnts/user.dto";
import { UserMapper } from "@authEnts/user.mapper";
import { UsersRepository } from "@authrepositories/auth.repository";
import { UserEntity } from "@authEnts/user.entity";
import { hash, compare } from "bcrypt";
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UsersService {
  constructor(
    private usersRepository: UsersRepository,
    private mapper: UserMapper,
    private jwtService: JwtService
  ) {}

  // Create new users with password validation
  async newUser(userDTO: UserDTO): Promise<UserDTO> {

    // Send body data
    const newUser: UserEntity = await this.usersRepository.newUser(userDTO);
    
    // Encript password
    const password = userDTO;
    const plainToHash = await hash(password, 8);
    userDTO = { ...userDTO, password: plainToHash}

    // Create user
    return this.mapper.entityToDto(newUser);
    // return this.usersRepository.save(newUser);
  }

  // Signin users with exist users validations
  async signinUser(userBaseDTO: UserBaseDTO) {
    
    // Verify if the user exist
    const {username, password} = userBaseDTO;
    const findUser = await this.usersRepository.signinUser({username});
    if (!findUser) throw new HttpException('USER NOT FOUND', 404);
    
    // verify if the password is correct
    const checkPassword = await compare(password, findUser.password);
    if(!checkPassword) throw new HttpException('PASSWORD INCORRECT', 403);
    
    const payload = { id: findUser.userId, username: findUser.username };
    const token = this.jwtService.sign(payload)

    // Signin
    const data = {
      user: findUser,
      token
    };
    return {data, token};
  }

  // Signin users with exist users validations
  async signIn(username, password) {

    // Verify if the user exist
    const user = await this.usersRepository.signinUser(username);
    if (!user) throw new HttpException('USER NOT FOUND', 404);

    // verify if the password is correct
    if (user?.password !== password) {
      throw new HttpException('PASSWORD INCORRECT', 403);
    }
    const payload = { username: user.username, sub: user.userId };

    // Signin
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
