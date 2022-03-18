import { SuatAn } from 'src/entity/suatan.entity';
import { Column, ManyToOne, JoinColumn } from 'typeorm';
import { PrimaryGeneratedColumn } from 'typeorm';
import { Entity } from 'typeorm';



  
@Entity({ name: 'chitietsuatan' })

export class ChiTietSuatAn{
    @PrimaryGeneratedColumn()
    id_auto?: number;

  
    @Column()
    id_phieu?: number;


    @Column()
    ma_vattu?: Date;

    @ManyToOne(() => SuatAn, suatan => suatan.chititetsuatans)
    @JoinColumn({ name: 'id_phieu'})
    suatan: SuatAn;

    
   

  }