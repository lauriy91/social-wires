/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { UserDTO } from "./entities/user.dto";
import { UserEntity } from "./entities/user.entity";
import { UserMapper } from "./entities/user.mapper";

@Injectable()
export class UsersRepository {
  constructor(
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>,
    private mapper: UserMapper
  ) {}

//   getUserById(userId: string): Promise<UserEntity> {
//     return this.usersRepository.findOne(userId);
//   }

  newUser(userDTO: UserDTO): Promise<UserEntity> {
    const newUser = this.mapper.dtoToEntity(userDTO);
    return this.usersRepository.save(newUser);
  }
}
