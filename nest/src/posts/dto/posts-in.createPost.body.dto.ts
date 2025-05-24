import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsUUID, MaxLength } from 'class-validator';

export class PostsInCreatePostBodyDto {
  @ApiProperty({
    example: 'ab2247fc-65e2-4f9b-9349-716cbe401613',
    required: true,
    nullable: false,
  })
  @IsUUID(4, { message: 'User id must be uuid' })
  userId: string;

  @ApiProperty({
    example: 'Post title',
    required: true,
    nullable: false,
  })
  @MaxLength(50)
  @IsString()
  title: string;

  @ApiProperty({
    example: 'Post content',
    required: true,
    nullable: false,
  })
  @MaxLength(250)
  @IsString()
  content: string;
}
