import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../../database/database.service';
import { PostsInGetManyQueryDto } from '../dto';

@Injectable()
export class PostsReadService {
  constructor(private readonly databaseService: DatabaseService) {}

  // ------------------------------ Get Many -------------------------------- //
  async getMany(args: PostsInGetManyQueryDto) {
    const [posts, total] = await this.databaseService.$transaction([
      this.databaseService.post.findMany({
        select: {
          uuid: true,
          title: true,
          content: true,
          user: {
            select: {
              uuid: true,
              name: true,
            },
          },
        },
        skip: args.offset,
        take: args.limit,
      }),
      this.databaseService.post.count(),
    ]);

    return { posts, total };
  }
}
