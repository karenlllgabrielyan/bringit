import { IsEmail, IsInt, IsString, Max, MaxLength, Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UsersInCreateUserDto {
  @ApiProperty({
    example: 'John',
    required: true,
    nullable: false,
  })
  @MaxLength(50)
  @IsString()
  name: string;

  @ApiProperty({
    example: 'john@gmail.com',
    required: true,
    nullable: false,
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    example: 20,
    required: true,
    nullable: false,
  })
  @Max(120)
  @Min(13)
  @IsInt()
  age: number;
}
