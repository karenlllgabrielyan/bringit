import { ApiProperty } from '@nestjs/swagger';

export class UsersOutGetManyItemDto {
  @ApiProperty({
    example: 'ab2247fc-65e2-4f9b-9349-716cbe401613',
  })
  uuid: string;

  @ApiProperty({
    example: 'John',
  })
  name: string;

  @ApiProperty({
    example: 'john@gmail.com',
  })
  email: string;

  @ApiProperty({
    example: 20,
  })
  postCount: number;
}
