import { InternalServerErrorException } from '@nestjs/common';
import { CreateProductoDto } from './dto/omkcreate-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { Producto } from './entities/omkproducto.entity';
import { GamasService } from '../gamas/omkgamas.service';
import { Repository } from 'typeorm';
export declare class ProductosService {
    private readonly productosRepository;
    private readonly gamasServie;
    constructor(productosRepository: Repository<Producto>, gamasServie: GamasService);
    create(createProductoDto: CreateProductoDto): Promise<InternalServerErrorException | {
        status: number;
        data: Producto;
        msg: string;
    }>;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateProductoDto: UpdateProductoDto): string;
    remove(id: number): string;
    deleteAllProductos(): Promise<import("typeorm").DeleteResult>;
}
