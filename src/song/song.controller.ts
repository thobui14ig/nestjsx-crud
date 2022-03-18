import { SongService } from './song.service';
import { Controller, Get, Delete, Param, Post, Body } from '@nestjs/common';

@Controller('song')
export class SongController {
    constructor(private songService: SongService){

    }

    @Get()
    findAll(){
        return this.songService.findAll();
    }

    @Post('/deletes')
    deleteAll(@Body() ids: [number]){
        return this.songService.deletesSong(ids)
    }

}
