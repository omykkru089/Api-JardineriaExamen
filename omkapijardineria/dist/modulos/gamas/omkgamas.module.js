"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GamasModule = void 0;
const common_1 = require("@nestjs/common");
const omkgamas_service_1 = require("./omkgamas.service");
const omkgamas_controller_1 = require("./omkgamas.controller");
const omkgama_entity_1 = require("./entities/omkgama.entity");
const typeorm_1 = require("@nestjs/typeorm");
let GamasModule = class GamasModule {
};
exports.GamasModule = GamasModule;
exports.GamasModule = GamasModule = __decorate([
    (0, common_1.Module)({
        controllers: [omkgamas_controller_1.GamasController],
        providers: [omkgamas_service_1.GamasService],
        imports: [
            typeorm_1.TypeOrmModule.forFeature([omkgama_entity_1.Gama])
        ],
        exports: [omkgamas_service_1.GamasService, typeorm_1.TypeOrmModule]
    })
], GamasModule);
//# sourceMappingURL=omkgamas.module.js.map