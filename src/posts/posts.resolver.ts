import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { PostsService } from './service/posts.service'
import { defaultPagination } from '../common/values'
import { Post } from './entity/post.entity'
import { PaginationIn } from './input/pagination'
import { CreatePostIn } from './input/post'
import { Paginated } from '../common/paginatedEntity'
import { Int, ObjectType } from 'type-graphql'

@ObjectType()
class PaginatedPost extends Paginated(Post) {}

@Resolver(() => Post)
export class PostsResolver {
  constructor(private readonly postsService: PostsService) {}

  @Query(() => PaginatedPost)
  getPosts(@Args('pagination') pagination: PaginationIn) {
    return this.postsService.find(pagination) as unknown as PaginatedPost
  }

  @Mutation(() => Post)
  createPost(@Args('post') post: CreatePostIn) {
    return this.postsService.create(post)
  }

  @Mutation(() => Post)
  deletePost(@Args({type: () => Int, name: 'id'}) id: number) {
    return this.postsService.deleteById(id)
  }
}
