/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { SignupDTO, UserSigninDTO } from "../parameters/user.dto";
import {
  SignupEntity,
  UserEntity,
  UserSigninEntity
} from "../parameters/user.entity";
import { UserMapper } from "../parameters/user.mapper";
import { SignupResponse, UsersResponse } from "../parameters/user.response";

@Injectable()
export class UsersRepository {
  constructor(
    @InjectRepository(UserEntity)
    private usersRepository: Repository<SignupEntity>,
    private mapper: UserMapper
  ) {}

  // create new users method
  async newUser(userDTO: SignupDTO): Promise<SignupResponse> {
    const newUser = await this.mapper.dtoToEntity(userDTO);
    return this.usersRepository.save(newUser);
  }

  // login user method
  async signinUser(userSigninDTO: UserSigninDTO): Promise<UserSigninEntity> {
    const signinUser = await this.mapper.dtoToEntityBase(userSigninDTO);
    return signinUser;
  }

  //  get all users registered
  async getAllUsers(): Promise<UsersResponse[]> {
    return await this.usersRepository.find();
  }
}
