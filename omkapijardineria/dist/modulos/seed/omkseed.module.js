"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeedModule = void 0;
const common_1 = require("@nestjs/common");
const omkseed_controller_1 = require("./omkseed.controller");
const omkseed_service_1 = require("./omkseed.service");
const omkgamas_module_1 = require("../gamas/omkgamas.module");
const omkproductos_module_1 = require("../productos/omkproductos.module");
let SeedModule = class SeedModule {
};
exports.SeedModule = SeedModule;
exports.SeedModule = SeedModule = __decorate([
    (0, common_1.Module)({
        controllers: [omkseed_controller_1.SeedController],
        providers: [omkseed_service_1.SeedService],
        imports: [omkgamas_module_1.GamasModule, omkproductos_module_1.ProductosModule]
    })
], SeedModule);
//# sourceMappingURL=omkseed.module.js.map