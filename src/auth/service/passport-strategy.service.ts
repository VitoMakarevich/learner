import { Injectable, UnauthorizedException } from '@nestjs/common'
import {Strategy} from 'passport-jwt'
import { PassportStrategy } from '@nestjs/passport'
import { UserService } from './user.service'

@Injectable()
export class PassportStrategyService extends PassportStrategy(Strategy) {
  constructor(private readonly authService: UserService) {
    super();
  }

  async validate(username: string, password: string): Promise<any> {
    const user = await this.authService.validate({login: username, password});
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
