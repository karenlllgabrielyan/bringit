import { Injectable } from '@nestjs/common';
import { UsersInCreateUserDto, UsersOutCreateUserDto } from '../dto';
import { DatabaseService } from '../../database/database.service';
import { UsersReadService } from './users.read.service';

@Injectable()
export class UsersService {
  constructor(
    private readonly databaseService: DatabaseService,
    private readonly usersReadService: UsersReadService,
  ) {}

  // ---------------------------------- Create User ---------------------------------- //
  async createUser(args: UsersInCreateUserDto): Promise<UsersOutCreateUserDto> {
    await this.usersReadService.checkEmailUniqueOrThrow({ email: args.email });

    return this.databaseService.user.create({
      data: {
        name: args.name,
        age: args.age,
        email: args.email,
      },
    });
  }
}
