import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { User } from '../entity/user.entity'
import { compare } from 'bcrypt'
import { SignInIn } from '../input/signIn'

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private repository: Repository<User>,
  ) {}

  async validate({ login: inputLogin, password: inputPassword }: SignInIn) {
    const user = await this.repository.findOne({
      where: {
        name: inputLogin,
      },
      select: ['id', 'name', 'password'],
    })
    if (!user) {
      return null
    }
    const { password: userPassword } = user
    const encryptedInput = await compare(inputPassword, userPassword)
    if (!encryptedInput) { return null }

    return user
  }
}
