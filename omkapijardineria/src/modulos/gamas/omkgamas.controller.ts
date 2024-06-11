import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GamasService } from './omkgamas.service';
import { CreateGamaDto } from './dto/omkcreate-gama.dto';
import { UpdateGamaDto } from './dto/update-gama.dto';

@Controller('gamas')
export class GamasController {
  constructor(private readonly gamasService: GamasService) {}

  @Post()
  create(@Body() createGamaDto: CreateGamaDto) {
    return this.gamasService.create(createGamaDto);
  }

  @Get()
  findAll() {
    return this.gamasService.findAll();
  }

  @Get(':id')
  findOne(@Param('nombre') nombre: string) {
    return this.gamasService.findOne(nombre);
  }

  @Patch(':id')
  update(@Param('nombre') nombre: string, @Body() updateGamaDto: UpdateGamaDto) {
    return this.gamasService.update(+nombre, updateGamaDto);
  }

  @Delete(':id')
  remove(@Param('nombre') nombre: string) {
    return this.gamasService.remove(+nombre);
  }
}
