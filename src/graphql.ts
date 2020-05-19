
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class CreatePostIn {
    url: string;
    description?: string;
}

export class PaginationIn {
    limit: number;
    page: number;
}

export abstract class IMutation {
    abstract createPost(post: CreatePostIn): Post | Promise<Post>;

    abstract deletePost(id: number): Post | Promise<Post>;
}

export class PaginatedPost {
    meta?: PostMeta;
    items?: Post[];
}

export class Post {
    id: number;
    url: string;
    description?: string;
    created: string;
    updated: string;
}

export class PostMeta {
    currentPage: number;
    itemCount: number;
    itemsPerPage: number;
    totalItems: number;
    totalPages: number;
}

export abstract class IQuery {
    abstract getPosts(pagination: PaginationIn): PaginatedPost | Promise<PaginatedPost>;
}
