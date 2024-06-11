import { Module } from '@nestjs/common';
import { ProductosService } from './omkproductos.service';
import { ProductosController } from './omkproductos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Producto } from './entities/omkproducto.entity';
import { GamasModule } from '../gamas/omkgamas.module';

@Module({
  controllers: [ProductosController],
  providers: [ProductosService],
  imports: [
    GamasModule,
    TypeOrmModule.forFeature([Producto])
  ],
  exports: [ ProductosService, TypeOrmModule]
})
export class ProductosModule {}
