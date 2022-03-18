import { UserFollower } from 'src/entity/user-follower.entity';
import { Module } from '@nestjs/common';
import { UserFollowerService } from './user-follower.service';
import { UserFollowerController } from './user-follower.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([UserFollower])],
  controllers: [UserFollowerController],
  providers: [UserFollowerService]
})
export class UserFollowerModule {}
