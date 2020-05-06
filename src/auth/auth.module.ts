import { Module } from '@nestjs/common';
import { UserService } from './service/user.service'
import { PassportStrategyService } from './service/passport-strategy.service';
import { TypeOrmModule } from '@nestjs/typeorm'
import { User } from './entity/user.entity'

@Module({
  providers: [UserService, PassportStrategyService],
  exports: [UserService],
  imports: [TypeOrmModule.forFeature([User])]
})
export class AuthModule {}
