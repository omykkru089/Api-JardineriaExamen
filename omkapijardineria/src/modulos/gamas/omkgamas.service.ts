import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateGamaDto } from './dto/omkcreate-gama.dto';
import { UpdateGamaDto } from './dto/update-gama.dto';
import { Gama } from './entities/omkgama.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class GamasService {
  constructor(
    @InjectRepository(Gama)
    private readonly gamasRepository: Repository<Gama>,
    ){

  }
  async create(createGamasDto: CreateGamaDto) {
    try {
      //el objeto (createAutoreDto) del controlador 
      //lo PREPARA en el onjeto (autor) para ser INSERTADO en el SGBD
      const gama = this.gamasRepository.create(createGamasDto);
    

      //lanza la petición de insercción a la BD
      //Mapea Objeto autor <--> registro autor
      //Genera el SQL insert into Autor(isbb, nombre) values ("1", "Glen Smidth");
      //aplica la libreria de bd instalada en el proyecto --> libreria de postgress (pg) 
      await this.gamasRepository.save(gama);
      return {
        msg: 'Registro Insertado',
        data: gama,
        status: 200
      }
    }catch(error){
      console.log(error);
      throw new InternalServerErrorException('Pongase en contacto con el Sysadmin')
    }
    
  }

  findAll() {
    const gamas = this.gamasRepository.find();

    return gamas;
  }

  findOne(nombre: string) {
    const gama= this.gamasRepository.findOne({
      where:{
        nombre
      }
    });
    return gama;
  }

  update(id: number, updateGamaDto: UpdateGamaDto) {
    return `This action updates a #${id} gama`;
  }

  remove(id: number) {
    return `This action removes a #${id} gama`;
  }

  async deleteAllGamas(){
    const query = this.gamasRepository.createQueryBuilder('gama');
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
