import { SeedService } from './omkseed.service';
export declare class SeedController {
    private readonly seedService;
    constructor(seedService: SeedService);
    loadData(): Promise<void>;
}
