import { GamasService } from '../gamas/omkgamas.service';
import { ProductosService } from '../productos/omkproductos.service';
export declare class SeedService {
    private readonly gamasService;
    private readonly productosService;
    constructor(gamasService: GamasService, productosService: ProductosService);
    loadData(): Promise<void>;
    private insertNewGamas;
    private insertNewProductos;
}
