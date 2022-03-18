
import { JoinColumn } from 'typeorm';
import { User } from 'src/entity/user.entity';
import { ManyToOne } from 'typeorm';
import { Column } from 'typeorm';
import { PrimaryGeneratedColumn } from 'typeorm';
import { GenericEntity } from './../generic/generic.entity';
import { Entity } from 'typeorm';
import { Post } from './post.entity';

export enum Type {
    happy = 'happy',
    sad = 'sad',
    angry = 'angry',
    like = 'like',
  }
  
@Entity()

export class Like extends GenericEntity {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ enum: Type, type: 'enum', default: Type.like })
    type: string;
  
    @ManyToOne(
      () => User,
      (user: User) => user.likes,
      { onUpdate: 'CASCADE', onDelete: 'CASCADE' },
    )
    @JoinColumn({ name: 'user_id' })
    user: User;
  
    @ManyToOne(
      () => Post,
      (post: Post) => post.likes,
      { onUpdate: 'CASCADE', onDelete: 'CASCADE' },
    )
    @JoinColumn({ name: 'post_id' })
    post: Post;
  }