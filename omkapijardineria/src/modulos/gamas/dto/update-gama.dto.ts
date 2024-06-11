import { PartialType } from '@nestjs/mapped-types';
import { CreateGamaDto } from './omkcreate-gama.dto';

export class UpdateGamaDto extends PartialType(CreateGamaDto) {}
