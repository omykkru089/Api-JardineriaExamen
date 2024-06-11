import { IsDecimal, IsNumber, IsString } from "class-validator";

export class CreateProductoDto {

    @IsString()
    codigo: string;

    @IsString()
    nombre: string;

    @IsString()
    codgama: string;

    @IsString()
    proveedor: string;

    @IsString()
    descripcion?: string;

    @IsDecimal()
    stock?: number;

    @IsDecimal()
    pvp?: number;

    @IsDecimal()
    pcoste?: number;

    @IsString()
    imagen: string;

}
