import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { PostsService } from './service/posts.service'

@Resolver('Post')
export class PostsResolver {
  constructor(private readonly postsService: PostsService) {}

  @Query()
  getPosts() {
    return this.postsService.findAll()
  }

  @Mutation()
  delete(@Args('id') id: number) {
    return this.postsService.deleteById(id)
  }
}
