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
exports.GamasService = void 0;
const common_1 = require("@nestjs/common");
const omkgama_entity_1 = require("./entities/omkgama.entity");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
let GamasService = class GamasService {
    constructor(gamasRepository) {
        this.gamasRepository = gamasRepository;
    }
    async create(createGamasDto) {
        try {
            const gama = this.gamasRepository.create(createGamasDto);
            await this.gamasRepository.save(gama);
            return {
                msg: 'Registro Insertado',
                data: gama,
                status: 200
            };
        }
        catch (error) {
            console.log(error);
            throw new common_1.InternalServerErrorException('Pongase en contacto con el Sysadmin');
        }
    }
    findAll() {
        const gamas = this.gamasRepository.find();
        return gamas;
    }
    findOne(nombre) {
        const gama = this.gamasRepository.findOne({
            where: {
                nombre
            }
        });
        return gama;
    }
    update(id, updateGamaDto) {
        return `This action updates a #${id} gama`;
    }
    remove(id) {
        return `This action removes a #${id} gama`;
    }
    async deleteAllGamas() {
        const query = this.gamasRepository.createQueryBuilder('gama');
        try {
            return await query
                .delete()
                .where({})
                .execute();
        }
        catch (error) {
            throw new common_1.InternalServerErrorException('sysadmin ...');
        }
    }
};
exports.GamasService = GamasService;
exports.GamasService = GamasService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(omkgama_entity_1.Gama)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], GamasService);
//# sourceMappingURL=omkgamas.service.js.map