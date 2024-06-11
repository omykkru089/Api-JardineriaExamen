import { ProductosService } from './omkproductos.service';
import { CreateProductoDto } from './dto/omkcreate-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
export declare class ProductosController {
    private readonly productosService;
    constructor(productosService: ProductosService);
    create(createProductoDto: CreateProductoDto): Promise<{
        status: number;
        data: import("./entities/omkproducto.entity").Producto;
        msg: string;
    }>;
    findAll(): Promise<import("./entities/omkproducto.entity").Producto[]>;
    findOne(codigo: string): Promise<import("./entities/omkproducto.entity").Producto>;
    update(codigo: string, updateProductoDto: UpdateProductoDto): string;
    remove(codigo: string): string;
}
