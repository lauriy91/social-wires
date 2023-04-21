/* eslint-disable prettier/prettier */

import { Injectable } from "@nestjs/common";
import { UserDTO } from "../entities/user.dto";
import { UserMapper } from "../entities/user.mapper";
import { UsersRepository } from "../auth.repository";
import { UserEntity } from "../entities/user.entity";

@Injectable()
export class UsersService {
  constructor(
    private usersRepository: UsersRepository,
    private mapper: UserMapper
  ) {}

//   async getUserById(id: string): Promise<UserDTO> {
//     const user: UserEntity = await this.usersRepository.getUserById(id);
//     return this.mapper.entityToDto(user);
//   }

  async newUser(userDTO: UserDTO): Promise<UserDTO> {
    const newUser: UserEntity = await this.usersRepository.newUser(userDTO);
    return this.mapper.entityToDto(newUser);
  }
}
