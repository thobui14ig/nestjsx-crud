import { User } from 'src/entity/user.entity';
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    ManyToOne,
    JoinColumn,
    EntityManager,
  } from 'typeorm';
  import { GenericEntity } from 'src/generic/generic.entity';
import { Post } from './post.entity';
  
  @Entity()
  export class Comment extends GenericEntity {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column('text')
    body: string;

    @Column({type: 'int', nullable: false})
    post_id: number
  


    
    @ManyToOne(
      () => User,
      (user: User) => user.posts,
      { onUpdate: 'CASCADE', onDelete: 'CASCADE' },
    )
    @JoinColumn({ name: 'user_id'})
    user: User;
  
    @ManyToOne(
      () => Post,
      (post: Post) => post.comments,
      { onUpdate: 'CASCADE', onDelete: 'CASCADE' },
    )
    @JoinColumn({ name: 'post_id' })
    post: Post;


    
  }