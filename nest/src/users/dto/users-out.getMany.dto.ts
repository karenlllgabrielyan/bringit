import { ApiProperty } from '@nestjs/swagger';
import { UsersOutGetManyItemDto } from './users-out.getManyItem.dto';

export class UsersOutGetManyDto {
  @ApiProperty({
    type: UsersOutGetManyItemDto,
    isArray: true,
  })
  users: UsersOutGetManyItemDto[];

  @ApiProperty({
    example: 15,
  })
  total: number;
}
