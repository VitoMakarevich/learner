import { Field, InputType, Int } from 'type-graphql'

@InputType()
export abstract class PaginationIn {
  @Field(() => Int)
  limit: 100

  @Field(() => Int)
  page: 0
}
