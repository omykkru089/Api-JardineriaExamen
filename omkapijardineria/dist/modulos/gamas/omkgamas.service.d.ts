import { CreateGamaDto } from './dto/omkcreate-gama.dto';
import { UpdateGamaDto } from './dto/update-gama.dto';
import { Gama } from './entities/omkgama.entity';
import { Repository } from 'typeorm';
export declare class GamasService {
    private readonly gamasRepository;
    constructor(gamasRepository: Repository<Gama>);
    create(createGamasDto: CreateGamaDto): Promise<{
        msg: string;
        data: Gama;
        status: number;
    }>;
    findAll(): Promise<Gama[]>;
    findOne(nombre: string): Promise<Gama>;
    update(id: number, updateGamaDto: UpdateGamaDto): string;
    remove(id: number): string;
    deleteAllGamas(): Promise<import("typeorm").DeleteResult>;
}
