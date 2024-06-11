import { Controller, Get } from '@nestjs/common';
import { SeedService } from './omkseed.service';

@Controller('seed')
export class SeedController {

    constructor (private readonly seedService: SeedService){

    }

    @Get()
    loadData(){
        return this.seedService.loadData();
    }
}
