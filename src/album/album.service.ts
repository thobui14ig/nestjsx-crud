import { Song } from 'src/entity/song.entity';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectConnection, InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';

import { Album } from 'src/entity/album.entity';


import { Connection, getRepository } from 'typeorm';

@Injectable()
export class AlbumService extends TypeOrmCrudService<Album> {
  constructor(
    @InjectRepository(Album) repo,
    @InjectConnection('hdldConnection')
    private songConnection: Connection,
    ) {
      super(repo);
  }   



  async getSongs(id: number){
    // const album = await getRepository(Album).createQueryBuilder("album").getOne();
    // return ablum
    const songs = await this.songConnection.getRepository(Song).createQueryBuilder("song").where("song.albumId = :albumId", { albumId: id }).getMany();
    // album.songs = songs;
    return songs
  }

  async getAll(data){
    for(let i = 0; i < data.data.length; i++){
      const songs = await this.songConnection.getRepository(Song).createQueryBuilder("song").where("song.albumId = :albumId", { albumId: data.data[i]["id"] }).getMany();
      data.data[i].songs = songs 
      // console.log(data.data[i])
    }
    return data;
  }

  




}




