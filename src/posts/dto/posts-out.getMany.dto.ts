import { PostsOutGetManyItemDto } from './posts-out.getManyItem.dto';
import { ApiProperty } from '@nestjs/swagger';

export class PostsOutGetManyDto {
  @ApiProperty({
    type: PostsOutGetManyItemDto,
    isArray: true,
  })
  posts: PostsOutGetManyItemDto[];

  @ApiProperty({
    example: 15,
  })
  total: number;
}
