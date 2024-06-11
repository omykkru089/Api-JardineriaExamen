import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateProductoDto } from './dto/omkcreate-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Producto } from './entities/omkproducto.entity';
import { GamasService } from '../gamas/omkgamas.service';
import { Repository } from 'typeorm';

@Injectable()
export class ProductosService {

  // constructor(
  //   @InjectRepository(Producto)
  //   private readonly productosRepository: Repository<Producto>,
  //   private readonly gamasServie: GamasService,
  //   ){

  // }
  // async create(createProductoDto: CreateProductoDto) {
  //   try{
  //       const {codgama, ...campos } = createProductoDto; //ES6
  //       const producto = this.productosRepository.create({...campos});
  //       const gamaobj = await this.gamasServie.findOne(codgama);
  //       producto.gama = gamaobj; //direccion del objeto gama relacionado
  //       await this.productosRepository.save(producto);
    
  //       return {
  //         status: 200,
  //         data: producto,
  //         msg: 'Libro insertado correctamente'
  //       };
  //   }catch(error){
  //     return new InternalServerErrorException('Error en BD');
  //   }
    
  // }
constructor(
    @InjectRepository(Producto)
    private readonly productosRepository: Repository<Producto>,
    private readonly gamasService: GamasService, // Corregido: gamasService
  ) {}

  async create(createProductoDto: CreateProductoDto) {
    try {
      const { codgama, ...campos } = createProductoDto; // ES6
      const producto = this.productosRepository.create({ ...campos });
      const gamaobj = await this.gamasService.findOne(codgama);
      producto.gama = gamaobj; // Dirección del objeto gama relacionado
      await this.productosRepository.save(producto);

      return {
        status: 200,
        data: producto,
        msg: 'Producto insertado correctamente'
      };
    } catch (error) {
      console.error('Error:', error);
      throw new InternalServerErrorException('Error en BD');
    }
  }

  findAll() {
    const productos = this.productosRepository.find();

    return productos;
  }

  findOne(codigo: string) {
    const gama= this.productosRepository.findOne({
      where:{
        codigo
      }
    });
    return gama;
  }

  update(id: number, updateProductoDto: UpdateProductoDto) {
    return `This action updates a #${id} producto`;
  }

  remove(id: number) {
    return `This action removes a #${id} producto`;
  }

  async deleteAllProductos(){
    const query = this.productosRepository.createQueryBuilder('producto');
    try{
      return await query  
        .delete()
        .where({})
        .execute()
    }catch(error){
      throw new InternalServerErrorException('sysadmin ...')
    }
  }

}