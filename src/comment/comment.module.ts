import { TypeOrmModule } from '@nestjs/typeorm';
import { CommentController } from './comment.controller';
import { Module } from '@nestjs/common';

import { CommentService } from './comment.service';
import { Comment } from 'src/entity/comment.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Comment])],
  controllers: [CommentController],
  providers: [CommentService]
})
export class CommentModule {}
