/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { UserBaseDTO, UserDTO, UserSigninDTO } from "./user.dto";
import { UserBaseEntity, UserEntity, UserSigninEntity } from "./user.entity";

@Injectable()

// This method convert from entity to dto and vice versa
export class UserMapper {

    dtoToEntityBase(userBaseDTO: UserBaseDTO): UserBaseEntity {
        // return new UserBaseEntity(userBaseDTO.userId, userBaseDTO.username, userBaseDTO.password, userBaseDTO.created_at);
        return new UserBaseEntity(userBaseDTO.userId, userBaseDTO.username, userBaseDTO.password);
    }

    dtoToEntitySignin(userSigninDTO: UserSigninDTO): UserSigninEntity {
        return new UserSigninEntity(userSigninDTO.username, userSigninDTO.password);
    }

    dtoToEntity(userDTO: UserDTO): UserEntity {
        // return new UserEntity(userDTO.userId, userDTO.username, userDTO.email, userDTO.password, userDTO.fullname, userDTO.created_at);
        return new UserEntity(userDTO.userId, userDTO.username, userDTO.email, userDTO.password, userDTO.fullname, userDTO.created_at);
    }

    entityToDtoBase(userBaseEntity: UserBaseEntity): UserBaseDTO {
        // return new UserBaseDTO(userBaseEntity.userId, userBaseEntity.username, userBaseEntity.password, userBaseEntity.created_at);
        return new UserBaseDTO(userBaseEntity.userId, userBaseEntity.username, userBaseEntity.password);
    }

    entityToDto(userEntity: UserEntity): UserDTO {
        // return new UserDTO(userEntity.userId, userEntity.username, userEntity.email, userEntity.password, userEntity.fullname, userEntity.created_at);
        return new UserDTO(userEntity.userId, userEntity.email, userEntity.fullname, userEntity.username, userEntity.password, userEntity.created_at);
    }

}
