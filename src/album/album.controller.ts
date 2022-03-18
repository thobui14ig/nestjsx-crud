
import { Body, Controller, Get, Param } from '@nestjs/common';
import { Crud, CrudController, Override, ParsedRequest, CrudRequest } from '@nestjsx/crud';
import { Album } from 'src/entity/album.entity';
import { AlbumService } from './album.service';

@Crud({
  model: {
    type: Album,
  },
  query:{
    // limit: 1,
    alwaysPaginate: true, // cho phép phân trang,
    join:{
      songs: {
        eager: false
      },

    }
  }


})
@Controller('album')
export class AlbumController {
  constructor(public service: AlbumService) {}

  get base(): CrudController<Album> {
    return this;
  }


  @Override()
  async getMany(
    @ParsedRequest() req: CrudRequest,
  ) { 
    const data = await this.base.getManyBase(req);
    const result = await this.service.getAll(data)
    return result
  }

  @Get('/:id')
  @Override('getOneBase')
  async getOneAndDoStuff(@Param("id") id: number,
    @ParsedRequest() req: CrudRequest,
  ): Promise<Album> {

    const data = await this.base.getOneBase(req)
    const songs = await this.service.getSongs(id)
    // console.log(data.songs)
    data.songs = songs
    return data;
    
  }




}
