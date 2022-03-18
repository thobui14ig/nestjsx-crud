import { Crud, CrudController } from '@nestjsx/crud';
import { User } from 'src/entity/user.entity';
import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common'

import { EntityId } from 'typeorm/repository/EntityId'
import { plainToClass } from 'class-transformer'

import { DeleteResult } from 'typeorm/index'
import { SuatAnService } from './suatan.service';
import { SuatAn } from 'src/entity/suatan.entity';
import { SuatAnDTO } from './suatan.dto';

@Crud({
  model: {
    type: SuatAn,
  },
  query:{
    // limit: 1,
    alwaysPaginate: true, // phân trang,
    // allow: ['title'],
    // persist: ["create_at"],
    exclude: ["comments", "body"], //loại bỏ
    join:{
      chititetsuatans: {
        // persist: ['body'],
        // allow: ["body", "post_id"],
        eager: false,

        // select: false,
        

      },

      
      // 'comments.user': {
      //   eager: true
      // }
    },
    
  }
})
@Controller('suatan')

export class SuatAnController implements CrudController<SuatAn> {
  constructor(public service: SuatAnService) {}

  // @Get()
  // getAll(): Promise<SuatAn[]> {
  //   return this.suatanService.getAll()
  // }

  // @Get('/inactive')
  // getInactiveUser(): Promise<User[]> {
  //   return this.userService.getInactiveUsers()
  // }

  // @Get('/:id')
  // async show(@Param('id') id: EntityId): Promise<User> {
  //   const user = await this.userService.findById(id)
  //   if (!user) {
  //     throw new NotFoundException()
  //   }

  //   return user
  // }

  // @Post("/add")
  // create(@Body() suatanData: SuatAnDTO) {
  //   console.log(0)
  //   console.log(suatanData)
  //     return this.suatanService.store(suatanData)


  // }

  // @Put('/:id')
  // update(@Param('id') id: EntityId, @Body() userData: UpdateUserDto): Promise<User> {
  //   return this.userService.update(id, userData)
  // }

  // @Delete('/:id')
  // destroy(@Param('id') id: EntityId): Promise<DeleteResult> {
  //   return this.userService.delete(id)
  // }
}