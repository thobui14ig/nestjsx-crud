import { User } from 'src/entity/user.entity'
import { EntityRepository, Repository } from 'typeorm'


@EntityRepository(User)
export class UserRepository extends Repository<User> {
  getInactiveUsers(): Promise<User[]> {
    return this.createQueryBuilder()
      .where('isActive = :active', { active: false })
      .getMany()
  }
}