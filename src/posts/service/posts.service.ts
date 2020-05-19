import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm'
import { Post } from '../entity/post.entity'
import { InjectRepository } from '@nestjs/typeorm'
import { take } from 'rxjs/operators'
import { paginate, Pagination } from 'nestjs-typeorm-paginate'
import { defaultPagination } from '../../common/values'
import { PaginationIn } from '../input/pagination'
import { CreatePostIn } from '../input/post'

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)
    private postsRepository: Repository<Post>
  ) {}

  find(pagination: PaginationIn): Promise<Pagination<Post>> {
    const options = {limit: pagination.limit, page: pagination.page}
    return paginate<Post>(this.postsRepository, options)
  }

  create(post: CreatePostIn) {
    return this.postsRepository.save(post)
  }

  async deleteById(id: number) {
    const item = await this.postsRepository.findOneOrFail({id})
    await this.postsRepository.delete({
      id,
    })
    return item
  }
}
