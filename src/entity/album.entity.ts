import { OneToMany } from 'typeorm';
import { Song } from 'src/entity/song.entity';
import { Column } from 'typeorm';
import { PrimaryGeneratedColumn } from 'typeorm';
import { Entity } from 'typeorm';



  
@Entity()

export class Album{
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    name: string; 

    // @OneToMany(() => Song, song => song.album ,{cascade: false})
    songs: Song[];

  }
  