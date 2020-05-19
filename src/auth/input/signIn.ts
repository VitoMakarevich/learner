import { Field } from 'type-graphql'

export abstract class SignInIn {
  @Field()
  login: string

  @Field()
  password: string
}
