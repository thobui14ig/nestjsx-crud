import { JoinColumn } from 'typeorm';
import { User } from './user.entity';
import { ManyToOne } from 'typeorm';
import { Column } from 'typeorm';
import { PrimaryGeneratedColumn } from 'typeorm';
import { Entity } from 'typeorm';


@Entity({ name: 'user_followers' })
export class UserFollower {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    following_id: number;

    @Column()
    follower_id: number;


    @ManyToOne(
    () => User,
    (u: User) => u.followers,
    )
    @JoinColumn({ name: 'follower_id' })
    followers: User;
}
