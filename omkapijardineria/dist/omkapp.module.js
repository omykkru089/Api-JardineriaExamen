"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const omkapp_controller_1 = require("./omkapp.controller");
const omkapp_service_1 = require("./omkapp.service");
const omkseed_module_1 = require("./modulos/seed/omkseed.module");
const omkgamas_module_1 = require("./modulos/gamas/omkgamas.module");
const omkproductos_module_1 = require("./modulos/productos/omkproductos.module");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const omkgama_entity_1 = require("./modulos/gamas/entities/omkgama.entity");
const omkproducto_entity_1 = require("./modulos/productos/entities/omkproducto.entity");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot(),
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: process.env.DB_HOST,
                port: +process.env.DB_PORT,
                database: process.env.DB_NAME,
                username: process.env.DB_USERNAME,
                password: process.env.DB_PASSWORD,
                autoLoadEntities: true,
                entities: [omkgama_entity_1.Gama, omkproducto_entity_1.Producto],
                synchronize: true
            }),
            omkseed_module_1.SeedModule,
            omkgamas_module_1.GamasModule,
            omkproductos_module_1.ProductosModule,
        ],
        controllers: [omkapp_controller_1.AppController],
        providers: [omkapp_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=omkapp.module.js.map