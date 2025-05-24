import { BadRequestException, Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { IGetUserByEmail } from './utils/interfaces';

@Injectable()
export class UsersReadService {
  constructor(private readonly databaseService: DatabaseService) {}

  // ---------------------------- Get User By Email ----------------------------- //
  async getUserByEmail(args: IGetUserByEmail) {
    return this.databaseService.user.findUnique({
      where: {
        email: args.email,
      },
    });
  }

  // ---------------------------- Get User By Email ----------------------------- //
  async checkEmailUniqueOrThrow(args: IGetUserByEmail) {
    const user = await this.getUserByEmail(args);

    if (user) {
      throw new BadRequestException('Email is already taken');
    }
  }
}
