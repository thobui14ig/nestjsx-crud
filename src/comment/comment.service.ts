import { Comment } from 'src/entity/comment.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CommentService extends TypeOrmCrudService<Comment> {
    constructor(@InjectRepository(Comment) repo) {
        super(repo);
    }   
}
