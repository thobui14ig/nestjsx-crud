import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserFollowerService } from './user-follower.service';
import { CreateUserFollowerDto } from './dto/create-user-follower.dto';
import { UpdateUserFollowerDto } from './dto/update-user-follower.dto';

@Controller('user-follower')
export class UserFollowerController {
  constructor(private readonly userFollowerService: UserFollowerService) {}

}
