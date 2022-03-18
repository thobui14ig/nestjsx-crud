import { PostService } from './post.service';
import { Crud, CrudController, CrudRequest, Override, ParsedRequest } from '@nestjsx/crud';
import { Controller, Get } from '@nestjs/common';
import { Post } from 'src/entity/post.entity';


@Crud({
    model: {
      type: Post,
    },
    query:{
      // limit: 1,
      alwaysPaginate: true, // phân trang,
      // allow: ['title'],
      // persist: ["create_at"],
      exclude: ["comments", "body"], //loại bỏ
      join:{
        comments: {
          // persist: ['body'],
          // allow: ["body", "post_id"],
          eager: false,
          exclude: ["body"] //loại bỏ
          // select: false,
          

        },
        likes: {
          eager: false,
          
        },
        
        // 'comments.user': {
        //   eager: true
        // }
      },
      
    }
  })
@Controller('post')
export class PostController implements CrudController<Post> {
    constructor(public service: PostService) {}

    get base(): CrudController<Post> {
      return this;
    }

    @Override()
    getMany(
      @ParsedRequest() req: CrudRequest,
    ) {
      console.log(1)
      return this.base.getManyBase(req);
    }

    @Get("get")
    updateMany(){
      console.log(1)
      return "ok"
    }




}
