import { Field, InputType, ObjectType } from 'type-graphql'

@InputType()
export abstract class CreatePostIn {
  @Field(() => String)
  url: string;

  @Field(() => String, {nullable: true})
  description?: string
}
