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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GamasController = void 0;
const common_1 = require("@nestjs/common");
const omkgamas_service_1 = require("./omkgamas.service");
const omkcreate_gama_dto_1 = require("./dto/omkcreate-gama.dto");
const update_gama_dto_1 = require("./dto/update-gama.dto");
let GamasController = class GamasController {
    constructor(gamasService) {
        this.gamasService = gamasService;
    }
    create(createGamaDto) {
        return this.gamasService.create(createGamaDto);
    }
    findAll() {
        return this.gamasService.findAll();
    }
    findOne(nombre) {
        return this.gamasService.findOne(nombre);
    }
    update(nombre, updateGamaDto) {
        return this.gamasService.update(+nombre, updateGamaDto);
    }
    remove(nombre) {
        return this.gamasService.remove(+nombre);
    }
};
exports.GamasController = GamasController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [omkcreate_gama_dto_1.CreateGamaDto]),
    __metadata("design:returntype", void 0)
], GamasController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], GamasController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('nombre')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], GamasController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('nombre')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_gama_dto_1.UpdateGamaDto]),
    __metadata("design:returntype", void 0)
], GamasController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('nombre')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], GamasController.prototype, "remove", null);
exports.GamasController = GamasController = __decorate([
    (0, common_1.Controller)('gamas'),
    __metadata("design:paramtypes", [omkgamas_service_1.GamasService])
], GamasController);
//# sourceMappingURL=omkgamas.controller.js.map