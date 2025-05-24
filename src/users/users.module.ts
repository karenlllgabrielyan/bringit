import { Module } from '@nestjs/common';
import { UsersService } from './services/users.service';
import { UsersController } from './users.controller';
import { UsersReadService } from './services/users.read.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService, UsersReadService],
  exports: [UsersReadService],
})
export class UsersModule {}
