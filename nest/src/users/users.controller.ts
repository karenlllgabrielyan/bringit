import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { UsersService } from './services/users.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import {
  UsersInCreateUserDto,
  UsersInGetManyQueryDto,
  UsersOutCreateUserDto,
} from './dto';
import { UsersReadService } from './services/users.read.service';
import { UsersOutGetManyDto } from './dto/users-out.getMany.dto';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly usersReadService: UsersReadService,
  ) {}

  @ApiOperation({ summary: 'Create user' })
  @ApiResponse({ status: 200, type: UsersOutCreateUserDto })
  @Post()
  create(@Body() body: UsersInCreateUserDto): Promise<UsersOutCreateUserDto> {
    return this.usersService.createUser(body);
  }

  @ApiOperation({ summary: 'Get Many' })
  @ApiResponse({ status: 200, type: UsersOutGetManyDto })
  @Get()
  getMany(@Query() query: UsersInGetManyQueryDto): Promise<UsersOutGetManyDto> {
    return this.usersReadService.getMany(query);
  }
}
