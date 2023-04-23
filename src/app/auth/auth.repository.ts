/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { SignupDTO, UserSigninDTO } from "./entities/user.dto";
import {
  SignupEntity,
  UserEntity,
  UserSigninEntity
} from "./entities/user.entity";
import { UserMapper } from "./entities/user.mapper";
import { SignupResponse, UsersResponse } from "./entities/user.response";

@Injectable()
export class UsersRepository {
  constructor(
    @InjectRepository(UserEntity)
    private usersRepository: Repository<SignupEntity>,
    private mapper: UserMapper
  ) {}

  async newUser(userDTO: SignupDTO): Promise<SignupResponse> {
    const newUser = await this.mapper.dtoToEntity(userDTO);
    return this.usersRepository.save(newUser);
  }

  async signinUser(userSigninDTO: UserSigninDTO): Promise<UserSigninEntity> {
    const signinUser = await this.mapper.dtoToEntityBase(userSigninDTO);
    return signinUser;
  }

  getAllUsers(): Promise<UsersResponse[]> {
    return this.usersRepository.find();
  }
}
