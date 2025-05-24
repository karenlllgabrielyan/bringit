import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../../database/database.service';
import { PostsInCreatePostBodyDto } from '../dto';
import { UsersReadService } from '../../users/services/users.read.service';

@Injectable()
export class PostsService {
  constructor(
    private readonly databaseService: DatabaseService,
    private readonly usersReadService: UsersReadService,
  ) {}

  // ---------------------------- Create Post ------------------------------- //
  async createPost(args: PostsInCreatePostBodyDto) {
    const { userId, title, content } = args;

    await this.usersReadService.getUserByIdOrThrow({ userId });

    return this.databaseService.post.create({
      data: {
        title,
        content,
        userUuid: userId,
      },
    });
  }
}
