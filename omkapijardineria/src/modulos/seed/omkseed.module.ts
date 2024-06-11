import { Module } from '@nestjs/common';
import { SeedController } from './omkseed.controller';
import { SeedService } from './omkseed.service';
import { GamasModule } from '../gamas/omkgamas.module';
import { ProductosModule } from '../productos/omkproductos.module';


@Module({
  controllers: [SeedController],
  providers: [SeedService],
  imports: [ GamasModule, ProductosModule ]
})
export class SeedModule {}
