
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { AlbumService } from './album.service';
import { AlbumController } from './album.controller';
import { Album } from 'src/entity/album.entity';
import { Song } from 'src/entity/song.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Album]),
    TypeOrmModule.forFeature([Song], 'hdldConnection'),
  ],
  controllers: [AlbumController],
  providers: [AlbumService]
})
export class AlbumModule {}
