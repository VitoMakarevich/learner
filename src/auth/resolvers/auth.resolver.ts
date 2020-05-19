import { Query, Resolver } from '@nestjs/graphql'
import { UserService } from '../service/user.service'
import { Request, UseGuards } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
import { SignInIn } from '../input/signIn'

@Resolver('User')
export class AuthResolver {
  @Query()
  @UseGuards(AuthGuard('jwt'))
  signIn(@Request() data: SignInIn) {
    return data
  }
}
