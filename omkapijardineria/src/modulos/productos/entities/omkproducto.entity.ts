import { Gama } from "src/modulos/gamas/entities/omkgama.entity";
import { BeforeInsert, Column, Entity, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Producto {

    @PrimaryColumn('text', { 
        unique: true,
    })
    codigo: string;

    @Column('text', { 
        unique: true
    })
    nombre: string;

    @Column('text',{nullable:true} )
    codgama: string;

    @Column('text', {
        nullable: true
    })
    proveedor: string;

    @Column('text')
    descripcion?: string;

    @Column({type: 'decimal', nullable: false })
    stock?: number;

    @Column({type: 'decimal', nullable: false })
    pvp?: number;

    @Column({type: 'decimal', nullable: false })
    pcoste?: number;

    @Column('text' )
    imagen: string;

    @ManyToOne(
        () => Gama,
        (gama) => gama.productos,
        {cascade: true}
    )
    gama?: Gama;

}
