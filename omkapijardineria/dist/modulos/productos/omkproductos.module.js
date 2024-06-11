"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductosModule = void 0;
const common_1 = require("@nestjs/common");
const omkproductos_service_1 = require("./omkproductos.service");
const omkproductos_controller_1 = require("./omkproductos.controller");
const typeorm_1 = require("@nestjs/typeorm");
const omkproducto_entity_1 = require("./entities/omkproducto.entity");
const omkgamas_module_1 = require("../gamas/omkgamas.module");
let ProductosModule = class ProductosModule {
};
exports.ProductosModule = ProductosModule;
exports.ProductosModule = ProductosModule = __decorate([
    (0, common_1.Module)({
        controllers: [omkproductos_controller_1.ProductosController],
        providers: [omkproductos_service_1.ProductosService],
        imports: [
            omkgamas_module_1.GamasModule,
            typeorm_1.TypeOrmModule.forFeature([omkproducto_entity_1.Producto])
        ],
        exports: [omkproductos_service_1.ProductosService, typeorm_1.TypeOrmModule]
    })
], ProductosModule);
//# sourceMappingURL=omkproductos.module.js.map