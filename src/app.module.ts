import { Song } from './entity/song.entity';

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostModule } from './post/post.module';
import { LikeModule } from './like/like.module';
import { UserFollowerModule } from './user-follower/user-follower.module';
import { CommentModule } from './comment/comment.module';
import { CommentSubscriber } from './subscriber/comment.subscriber';
import { AlbumModule } from './album/album.module';
import { SongModule } from './song/song.module';

import { UserModule } from './user/user.module';
import { LoggerModule } from './logger/logger.module';
import { SuatAnModule } from './suatan/suatan.module';



const defaultOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  synchronize: false,
};






@Module({
imports: [
  TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'nestjsx',
      synchronize: false,
      subscribers: [CommentSubscriber],
      entities: ["dist/**/*.entity{.ts,.js}"],
      migrations: [
        'src/database/migrations/*.ts',
      ],
      cli: {
        migrationsDir: 'src/database/migrations',
      },
  }),



  TypeOrmModule.forRoot({
    ...defaultOptions,
    database: 'hdld',
    password: '',
    name: 'hdldConnection',
    entities: [Song],
    logging: true
  } as any), 
  

  LoggerModule,
  PostModule,
  LikeModule,
  UserFollowerModule,
  CommentModule,
  AlbumModule,
  SongModule,
  UserModule,
  SuatAnModule
  ],
  controllers: [],
  providers: [],
})  
export class AppModule {}
