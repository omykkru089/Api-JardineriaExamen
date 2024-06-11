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
exports.ProductosService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const omkproducto_entity_1 = require("./entities/omkproducto.entity");
const omkgamas_service_1 = require("../gamas/omkgamas.service");
const typeorm_2 = require("typeorm");
let ProductosService = class ProductosService {
    constructor(productosRepository, gamasService) {
        this.productosRepository = productosRepository;
        this.gamasService = gamasService;
    }
    async create(createProductoDto) {
        try {
            const { codgama, ...campos } = createProductoDto;
            const producto = this.productosRepository.create({ ...campos });
            const gamaobj = await this.gamasService.findOne(codgama);
            producto.gama = gamaobj;
            await this.productosRepository.save(producto);
            return {
                status: 200,
                data: producto,
                msg: 'Producto insertado correctamente'
            };
        }
        catch (error) {
            console.error('Error:', error);
            throw new common_1.InternalServerErrorException('Error en BD');
        }
    }
    findAll() {
        const productos = this.productosRepository.find();
        return productos;
    }
    findOne(codigo) {
        const gama = this.productosRepository.findOne({
            where: {
                codigo
            }
        });
        return gama;
    }
    update(id, updateProductoDto) {
        return `This action updates a #${id} producto`;
    }
    remove(id) {
        return `This action removes a #${id} producto`;
    }
    async deleteAllProductos() {
        const query = this.productosRepository.createQueryBuilder('producto');
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
exports.ProductosService = ProductosService;
exports.ProductosService = ProductosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(omkproducto_entity_1.Producto)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        omkgamas_service_1.GamasService])
], ProductosService);
//# sourceMappingURL=omkproductos.service.js.map