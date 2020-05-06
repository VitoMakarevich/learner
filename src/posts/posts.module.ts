import { Module } from '@nestjs/common';
import { PostsService } from './service/posts.service';
import { TypeOrmModule } from '@nestjs/typeorm'
import { Post } from './entity/post.entity'
import { PostsResolver } from './posts.resolver'

@Module({
  providers: [PostsService, PostsResolver],
  imports: [
    TypeOrmModule.forFeature([Post])
  ]
})
export class PostsModule {}
