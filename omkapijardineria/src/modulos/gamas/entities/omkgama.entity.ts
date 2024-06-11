
import { Column, Entity, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Producto } from '../../productos/entities/omkproducto.entity';

@Entity()
export class Gama {

  @PrimaryColumn('text', { 
    unique: true,
})
    nombre: string;

    @Column('text')
    descripcion: string;

    @Column('text', )
    imagen: string;

    @OneToMany(
      () => Producto,
      (producto) => producto.gama,
      { eager: true }
    )
    productos?: Producto[] //virtual

}
