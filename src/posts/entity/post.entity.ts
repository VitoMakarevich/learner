import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import { Field, Int, ObjectType } from 'type-graphql'

@ObjectType()
@Entity()
export class Post {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => String)
  @Column({ length: 500 })
  url: string;

  @Field(() => String, {nullable: true})
  @Column({
    nullable: true,
  })
  description?: string

  @Field(() => String)
  @CreateDateColumn({ name: 'created' })
  created: Date;

  @Field(() => String)
  @UpdateDateColumn({ name: 'updated' })
  updated: Date;
}
