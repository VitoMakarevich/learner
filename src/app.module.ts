import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { config } from 'dotenv'
import { PostsModule } from './posts/posts.module';
import { GraphQLModule } from '@nestjs/graphql'

const isProduction = process.env.NODE_ENV === 'production'

if (!isProduction) { config() }

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT, 10),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: 'src/graphql/schema.graphql',
      playground: true
    }),
    PostsModule,
    // TODO: fix when it will be not so tedious
    // AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
