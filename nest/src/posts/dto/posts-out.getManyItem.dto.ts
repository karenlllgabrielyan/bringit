import { ApiProperty } from '@nestjs/swagger';

export class PostsGetManyItemUserDto {
  @ApiProperty({
    example: 'ab2247fc-65e2-4f9b-9349-716cbe401613',
  })
  uuid: string;

  @ApiProperty({
    example: 'User name',
  })
  name: string;
}

export class PostsOutGetManyItemDto {
  @ApiProperty({
    example: 'ab2247fc-65e2-4f9b-9349-716cbe401613',
  })
  uuid: string;

  @ApiProperty({
    example: 'Post title',
  })
  title: string;

  @ApiProperty({
    example: 'Post content',
  })
  content: string;

  @ApiProperty({
    example: { uuid: 'ab2247fc-65e2-4f9b-9349-716cbe401613', name: 'John' },
    type: PostsGetManyItemUserDto,
  })
  user: PostsGetManyItemUserDto;
}
