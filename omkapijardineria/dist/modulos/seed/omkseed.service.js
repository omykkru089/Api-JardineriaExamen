"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeedService = void 0;
const common_1 = require("@nestjs/common");
const omkgamas_service_1 = require("../gamas/omkgamas.service");
const omkproductos_service_1 = require("../productos/omkproductos.service");
const seedGamas = require("./data/gamas.json");
const seedProductos = require("./data/productos.json");
let SeedService = class SeedService {
    constructor(gamasService, productosService) {
        this.gamasService = gamasService;
        this.productosService = productosService;
    }
    async loadData() {
        await this.insertNewGamas();
        await this.insertNewProductos();
    }
    async insertNewGamas() {
        await this.gamasService.deleteAllGamas();
        const insertPromisesGamas = [];
        seedGamas.forEach((gama) => {
            console.log(gama);
            insertPromisesGamas.push(this.gamasService.create(gama));
        });
    }
    async insertNewProductos() {
        await this.productosService.deleteAllProductos();
        const insertPromisesProductos = [];
        seedProductos.forEach((producto) => {
            console.log(producto);
            insertPromisesProductos.push(this.productosService.create(producto));
        });
    }
};
exports.SeedService = SeedService;
exports.SeedService = SeedService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [omkgamas_service_1.GamasService,
        omkproductos_service_1.ProductosService])
], SeedService);
//# sourceMappingURL=omkseed.service.js.map