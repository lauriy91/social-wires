/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { SignupDTO, UserBaseDTO } from "./user.dto";
import {
    SignupEntity,
    UserBaseEntity,
    UserEntity
} from "./user.entity";

@Injectable()

// This method convert from entity to dto and vice versa
export class UserMapper {

  // DTO to Entity convert Signin
  dtoToEntityBase(userBaseDTO: UserBaseDTO): UserBaseEntity {
    return new UserBaseEntity(
      userBaseDTO.username, 
      userBaseDTO.password
    );
  }

  // DTO to Entity convert Signup
  dtoToEntity(userDTO: SignupDTO): UserEntity {
    return new UserEntity(
      userDTO.userId,
      userDTO.username,
      userDTO.email,
      userDTO.password,
      userDTO.fullname,
      userDTO.created_at
    );
  }

  //   Entity to DTO convert signup
  entityToDtoBase(userBaseEntity: UserBaseEntity): UserBaseDTO {
    return new UserBaseDTO(
      userBaseEntity.userId,
      userBaseEntity.username,
      userBaseEntity.password
    );
  }

  //   Entity to DTO convert signup
  entitySignupToDto(userEntity: SignupEntity): SignupDTO {
    return new SignupDTO(
      userEntity.userId,
      userEntity.username,
      userEntity.email,
      userEntity.fullname
    );
  }
}
