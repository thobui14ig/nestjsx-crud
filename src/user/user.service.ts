import { User } from 'src/entity/user.entity';
import { BaseService } from './../base.service';


import { Injectable } from '@nestjs/common'

import { LoggerService } from '../logger/custom.logger'
import { UserRepository } from './user.repository';

@Injectable()
export class UserService extends BaseService<User, UserRepository> {
  constructor(repository: UserRepository, logger: LoggerService) {
    super(repository, logger)
  }

  findByEmail(email: string): Promise<User | null> {
    return this.repository.findOne({ email: email })
  }

  getInactiveUsers(): Promise<User[]> {
    return this.repository.getInactiveUsers()
  }
}