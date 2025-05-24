import { BadRequestException, Injectable } from '@nestjs/common';
import { DatabaseService } from '../../database/database.service';
import { IGetUserByEmail, IGetUserById } from '../utils/interfaces';
import { UsersInGetManyQueryDto } from '../dto';
import { UsersOutGetManyDto } from '../dto/users-out.getMany.dto';
import { Prisma } from '@prisma/client';

@Injectable()
export class UsersReadService {
  constructor(private readonly databaseService: DatabaseService) {}

  // ------------------------------ Get User By Email ------------------------------- //
  async getUserByEmail(args: IGetUserByEmail) {
    return this.databaseService.user.findUnique({
      where: {
        email: args.email,
      },
    });
  }

  // ----------------------- Check User With Email Or Throw -------------------------- //
  async checkEmailUniqueOrThrow(args: IGetUserByEmail): Promise<void> {
    const user = await this.getUserByEmail(args);

    if (user) {
      throw new BadRequestException('Email is already taken');
    }
  }

  // ------------------------------------ Get Many -----------------------------------//
  async getMany(args: UsersInGetManyQueryDto): Promise<UsersOutGetManyDto> {
    const { name, offset, limit } = args;

    const [users, total] = await this.databaseService.$transaction([
      this.databaseService.user.findMany({
        select: {
          uuid: true,
          name: true,
          email: true,
          _count: {
            select: { posts: true },
          },
        },
        where: name
          ? {
              name: {
                contains: name,
              },
            }
          : undefined,
        skip: offset,
        take: limit,
      }),
      this.databaseService.user.count({
        where: name
          ? {
              name: {
                contains: name,
              },
            }
          : undefined,
      }),
    ]);

    return {
      users: users.map((user) => {
        return {
          uuid: user.uuid,
          name: user.name,
          email: user.email,
          postCount: user._count.posts,
        };
      }),
      total,
    };
  }

  // ------------------------------ Get User By Id ------------------------------- //
  async getUserById(args: IGetUserById) {
    return this.databaseService.user.findUnique({
      where: {
        uuid: args.userId,
      },
    });
  }

  // -------------------------- Get User By Id Or Throw --------------------------- //
  async getUserByIdOrThrow(args: IGetUserById) {
    const user = await this.getUserById(args);

    if (!user) {
      throw new BadRequestException('User not found');
    }

    return user;
  }
}
