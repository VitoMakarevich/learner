import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm'
import { Post } from '../entity/post.entity'
import { InjectRepository } from '@nestjs/typeorm'

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)
    private postsRepository: Repository<Post>
  ) {}

  findAll() {
    return this.postsRepository.find()
  }

  deleteById(id: number) {
    return this.postsRepository.delete({
      id,
    })
  }
}
