import { Query, Resolver } from '@nestjs/graphql'
import { UserService } from '../service/user.service'
import { SignInRequest } from '../../graphql'
import { Request, UseGuards } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'

@Resolver('User')
export class AuthResolver {
  @Query()
  @UseGuards(AuthGuard('jwt'))
  signIn(@Request() data: SignInRequest) {
    return data
  }
}
