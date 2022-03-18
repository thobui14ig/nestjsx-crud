import { SuatAnDTO } from './suatan.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';


import { Injectable } from '@nestjs/common'

import { LoggerService } from '../logger/custom.logger'
import { SuatAn } from 'src/entity/suatan.entity';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';

@Injectable()
export class SuatAnService  extends TypeOrmCrudService<SuatAn>{


  constructor(@InjectRepository(SuatAn) repo) {
      super(repo);
  }


  // getAll(){
  //   return this.suatanRepository.find()
  // }

  // store(suatanData: SuatAnDTO){
  //     console.log(suatanData)
  // }

}