import { InjectRepository } from '@nestjs/typeorm';
import { UserFollower } from 'src/entity/user-follower.entity';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Injectable } from '@nestjs/common';
import { CreateUserFollowerDto } from './dto/create-user-follower.dto';
import { UpdateUserFollowerDto } from './dto/update-user-follower.dto';

@Injectable()
export class UserFollowerService extends TypeOrmCrudService<UserFollower>{
  constructor(@InjectRepository(UserFollower) repo) {
      super(repo);
  }
}
