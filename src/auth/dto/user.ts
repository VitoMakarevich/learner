import { User } from '../entity/user.entity'
import {User as UserDto} from 'src/graphql'

export class UserMapper {
  static transformFromEntity(entity: User): UserDto {
    return {
      name: entity.name,
      id: entity.id,
    }
  }
}
