import { ProductosService } from './omkproductos.service';
import { CreateProductoDto } from './dto/omkcreate-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
export declare class ProductosController {
    private readonly productosService;
    constructor(productosService: ProductosService);
    create(createProductoDto: CreateProductoDto): Promise<import("@nestjs/common").InternalServerErrorException | {
        status: number;
        data: import("./entities/omkproducto.entity").Producto;
        msg: string;
    }>;
    findAll(): string;
    findOne(codigo: string): string;
    update(codigo: string, updateProductoDto: UpdateProductoDto): string;
    remove(codigo: string): string;
}
