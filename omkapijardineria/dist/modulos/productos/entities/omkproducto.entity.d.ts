import { Gama } from "src/modulos/gamas/entities/omkgama.entity";
export declare class Producto {
    codigo: string;
    nombre: string;
    codgama: string;
    proveedor: string;
    descripcion?: string;
    stock?: number;
    pvp?: number;
    pcoste?: number;
    imagen: string;
    gama?: Gama;
}
