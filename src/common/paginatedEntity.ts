import { Field, ObjectType, Int } from 'type-graphql';
import { Type } from '@nestjs/common';

export function Paginated<T>(classRef: Type<T>): any {
  @ObjectType(`${classRef.name}Meta`)
  abstract class Meta {
    @Field((type) => Int)
    currentPage: number

    @Field((type) => Int)
    itemCount: number

    @Field((type) => Int)
    itemsPerPage: number

    @Field((type) => Int)
    totalItems: number

    @Field((type) => Int)
    totalPages: number
  }

  @ObjectType({ isAbstract: true })
  abstract class PaginatedType {
    @Field((type) => Meta)
    meta: Meta;

    @Field((type) => [classRef])
    items: T[];
  }
  return PaginatedType;
}
