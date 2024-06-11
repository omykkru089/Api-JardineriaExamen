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

    @IsString()
    stock?: number;

    @IsString()
    pvp?: number;

    @IsString()
    pcoste?: number;

    @IsString()
    imagen: string;

}
