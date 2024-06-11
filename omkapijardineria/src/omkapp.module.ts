import { Module } from '@nestjs/common';
import { AppController } from './omkapp.controller';
import { AppService } from './omkapp.service';
import { SeedModule } from './modulos/seed/omkseed.module';
import { GamasModule } from './modulos/gamas/omkgamas.module';
import { ProductosModule } from './modulos/productos/omkproductos.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Gama } from './modulos/gamas/entities/omkgama.entity';
import { Producto } from './modulos/productos/entities/omkproducto.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      database: process.env.DB_NAME,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      autoLoadEntities: true,
      entities: [Gama, Producto],
      synchronize: true
    }),
    SeedModule,
    GamasModule,
    ProductosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
