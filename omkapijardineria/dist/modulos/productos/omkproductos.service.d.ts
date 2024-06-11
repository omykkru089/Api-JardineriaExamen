import { CreateProductoDto } from './dto/omkcreate-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { Producto } from './entities/omkproducto.entity';
import { GamasService } from '../gamas/omkgamas.service';
import { Repository } from 'typeorm';
export declare class ProductosService {
    private readonly productosRepository;
    private readonly gamasService;
    constructor(productosRepository: Repository<Producto>, gamasService: GamasService);
    create(createProductoDto: CreateProductoDto): Promise<{
        status: number;
        data: Producto;
        msg: string;
    }>;
    findAll(): Promise<Producto[]>;
    findOne(codigo: string): Promise<Producto>;
    update(id: number, updateProductoDto: UpdateProductoDto): string;
    remove(id: number): string;
    deleteAllProductos(): Promise<import("typeorm").DeleteResult>;
}
