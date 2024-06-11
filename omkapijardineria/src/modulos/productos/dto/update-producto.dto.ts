import { PartialType } from '@nestjs/mapped-types';
import { CreateProductoDto } from './omkcreate-producto.dto';

export class UpdateProductoDto extends PartialType(CreateProductoDto) {}
