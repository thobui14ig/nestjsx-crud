import { UserFollower } from 'src/entity/user-follower.entity';
import { GenericEntity } from './../generic/generic.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, BaseEntity } from "typeorm";
import { Post } from './post.entity';
import { Like } from './like.entity';
import { Comment } from './comment.entity';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn() id: number;

  @Column() name: string;
  @Column() email: string;
  @Column() role: number;

  

  @OneToMany(() => Post, post => post.user)
  posts: Post[]

  @OneToMany(
    () => UserFollower,
    (uf: UserFollower) => uf.followers,
  )
  followers: UserFollower[];

  @OneToMany(
    () => Like,
    (like: Like) => like.user,
    { onUpdate: 'CASCADE', onDelete: 'CASCADE' },
  )
  likes: Like[];
    
  @OneToMany(
    type => Comment,
    (comment: Comment) => comment.user,
    { onUpdate: 'CASCADE', onDelete: 'CASCADE' },
  )
  comments: Comment[];
}