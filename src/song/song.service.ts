import { Album } from 'src/entity/album.entity';
import { Song } from 'src/entity/song.entity';
import { InjectConnection, InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Connection, Repository, getRepository } from 'typeorm';

@Injectable()
export class SongService {
    constructor(
        @InjectConnection('hdldConnection')
        private songConnection: Connection,
        @InjectRepository(Song, "hdldConnection") private readonly songRepository: Repository<Song>
    ){}

    async findAll(){
        const listSong = await this.songRepository.find();
        const albumArr = await getRepository(Album).createQueryBuilder("album").getMany();
        for(let i = 0; i < listSong.length; i++){
            const result = albumArr.find( ({ id }) => id ===  listSong[i]["albumId"] );
            listSong[i].album = result
        }
        

        return listSong

    }

    async deletesSong(ids: [number]){
        for(let i = 0; i < ids["ids"].length; i++){
            console.log(ids["ids"][i])
            const song = await this.songRepository.findOneOrFail(ids["ids"][i])
            this.songRepository.remove(song);
        }
        return ids;
 

    }
}
