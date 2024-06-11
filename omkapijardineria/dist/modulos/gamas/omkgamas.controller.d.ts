import { GamasService } from './omkgamas.service';
import { CreateGamaDto } from './dto/omkcreate-gama.dto';
import { UpdateGamaDto } from './dto/update-gama.dto';
export declare class GamasController {
    private readonly gamasService;
    constructor(gamasService: GamasService);
    create(createGamaDto: CreateGamaDto): Promise<{
        msg: string;
        data: import("./entities/omkgama.entity").Gama;
        status: number;
    }>;
    findAll(): Promise<import("./entities/omkgama.entity").Gama[]>;
    findOne(nombre: string): Promise<import("./entities/omkgama.entity").Gama>;
    update(nombre: string, updateGamaDto: UpdateGamaDto): string;
    remove(nombre: string): string;
}
