import { SongController } from './song.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { SongService } from './song.service';
import { Album } from 'src/entity/album.entity';
import { Song } from 'src/entity/song.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Song], 'hdldConnection'),
  ],
  providers: [SongService],
  controllers: [SongController]
})
export class SongModule {}
