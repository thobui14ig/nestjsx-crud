import { CommentService } from './comment.service';
import { Crud, CrudController } from '@nestjsx/crud';
import { Controller, Get } from '@nestjs/common';
import { Comment } from 'src/entity/comment.entity';


@Crud({
    model: {
      type: Comment,
    },
    query:{
        join:{
          post:{
            eager: true
          }
        }
    }

  })
@Controller('comment')
export class CommentController implements CrudController<Comment> {
    constructor(public service: CommentService) {}
}
