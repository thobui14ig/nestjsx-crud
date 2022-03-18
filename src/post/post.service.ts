import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Injectable } from '@nestjs/common';
import { Post } from 'src/entity/post.entity';

@Injectable()
export class PostService extends TypeOrmCrudService<Post> {
    constructor(@InjectRepository(Post) repo) {
        super(repo);
    }   
}
