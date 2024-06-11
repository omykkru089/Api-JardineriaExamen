import { Module } from '@nestjs/common';
import { GamasService } from './omkgamas.service';
import { GamasController } from './omkgamas.controller';
import { Gama } from './entities/omkgama.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [GamasController],
  providers: [GamasService],
  imports: [
    TypeOrmModule.forFeature([Gama])
  ],
  exports: [ GamasService, TypeOrmModule]
})
export class GamasModule {}
