import { Module } from '@nestjs/common';
import { PostsService } from './services/posts.service';
import { PostsController } from './posts.controller';
import { UsersModule } from '../users/users.module';
import { PostsReadService } from './services/posts.read.service';

@Module({
  imports: [UsersModule],
  controllers: [PostsController],
  providers: [PostsService, PostsReadService],
})
export class PostsModule {}
