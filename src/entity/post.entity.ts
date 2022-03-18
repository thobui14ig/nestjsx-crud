import { Like } from './like.entity';
import { GenericEntity } from './../generic/generic.entity';
import { User } from './user.entity';
import { JoinColumn, Entity, PrimaryGeneratedColumn, Column, ManyToMany, ManyToOne, OneToMany } from "typeorm";
import { Comment } from './comment.entity';

@Entity()
export class Post extends GenericEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column('text')
    body: string;

    @ManyToOne(() => User, user => user.posts, {onUpdate: "CASCADE", onDelete: "CASCADE"})
    @JoinColumn({name: 'userId'})
    user: User;

    @OneToMany(
        type => Like,
        (like: Like) => like.post,
        { onUpdate: 'CASCADE', onDelete: 'CASCADE' },
      )
      likes: Like[];


      @OneToMany(
        type => Comment,
        (comment: Comment) => comment.post,
        { onUpdate: 'CASCADE', onDelete: 'CASCADE' },
      )
      comments: Comment[];


      @Column({default: 0, type: 'int'})
      comments_num: number


}