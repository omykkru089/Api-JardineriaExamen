import { Injectable } from '@nestjs/common';
import { GamasService } from '../gamas/omkgamas.service';
import { ProductosService } from '../productos/omkproductos.service';
import { Gama } from '../gamas/entities/omkgama.entity';


import * as seedGamas from './data/gamas.json';
import * as seedProductos from './data/productos.json';
import { Producto } from '../productos/entities/omkproducto.entity';

@Injectable()
export class SeedService {

    constructor (
        private readonly gamasService: GamasService,
        private readonly productosService: ProductosService,
            
    ){}
    
    public async loadData(){
        await this.insertNewGamas();
        await this.insertNewProductos();
    }

    private async insertNewGamas(){
        await this.gamasService.deleteAllGamas();
        const insertPromisesGamas = [];
        seedGamas.forEach( (gama: Gama) => {
            console.log(gama);
            insertPromisesGamas.push(this.gamasService.create(gama))
        })
    }
    private async insertNewProductos(){
        await this.productosService.deleteAllProductos();
        const insertPromisesProductos = [];
        seedProductos.forEach( (producto: Producto) => {
            console.log(producto);
            insertPromisesProductos.push(this.productosService.create(producto))
        })
    }

}
