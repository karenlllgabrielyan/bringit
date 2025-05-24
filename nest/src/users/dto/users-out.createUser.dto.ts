import { ApiProperty } from '@nestjs/swagger';

export class UsersOutCreateUserDto {
  @ApiProperty({
    example: '3bae617b-a68e-447f-9d51-4997a2040846',
    required: true,
    nullable: false,
  })
  uuid: string;

  @ApiProperty({
    example: 'John',
    required: true,
    nullable: false,
  })
  name: string;

  @ApiProperty({
    example: 'john@gmail.com',
    required: true,
    nullable: false,
  })
  email: string;

  @ApiProperty({
    example: 20,
    required: true,
    nullable: false,
  })
  age: number;
}
