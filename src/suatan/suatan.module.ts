import { SuatAnService } from './suatan.service';
import { SuatAn } from './../entity/suatan.entity';

import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { SuatAnController } from './suatan.controller';


@Module({
  imports: [
    TypeOrmModule.forFeature([
      SuatAn
    ]),
  ],
  controllers: [SuatAnController],
  providers: [SuatAnService],
  exports: [
    TypeOrmModule,
  ],
})
export class SuatAnModule {}
