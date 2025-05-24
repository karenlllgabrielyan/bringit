import { ApiProperty } from '@nestjs/swagger';
import {
  IsInt,
  IsNumberString,
  IsOptional,
  IsString,
  Max,
  MaxLength,
  Min,
} from 'class-validator';
import { Type } from 'class-transformer';

export class UsersInGetManyQueryDto {
  @IsOptional()
  @ApiProperty({
    example: 'John',
    required: false,
    nullable: false,
  })
  @MaxLength(50)
  @IsString()
  name: string | undefined;

  @ApiProperty({
    example: 10,
    required: true,
    nullable: false,
  })
  @Max(10, { message: 'Limit cannot be grater than 10' })
  @IsInt({ message: 'Limit must be an integer number' })
  @Type(() => Number)
  limit: number;

  @ApiProperty({
    example: 0,
    required: true,
    nullable: false,
  })
  @Min(0)
  @IsInt({ message: 'Offset must be an integer number' })
  @Type(() => Number)
  offset: number;
}
