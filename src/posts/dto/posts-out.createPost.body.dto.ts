import { ApiProperty } from '@nestjs/swagger';

export class PostsOutCreatePostBodyDto {
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
}
