import { Column, ManyToOne } from 'typeorm';
import { PrimaryGeneratedColumn } from 'typeorm';
import { Entity } from 'typeorm';
import { Album } from 'src/entity/album.entity';



  
@Entity()

export class Song{
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    name: string;

    @Column()
    albumId: number;
  //  @ManyToOne(() => Album, ablum => ablum.songs)
    album: Album ;
   

  }