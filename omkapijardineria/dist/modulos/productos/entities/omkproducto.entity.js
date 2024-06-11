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
exports.Producto = void 0;
const omkgama_entity_1 = require("../../gamas/entities/omkgama.entity");
const typeorm_1 = require("typeorm");
let Producto = class Producto {
};
exports.Producto = Producto;
__decorate([
    (0, typeorm_1.PrimaryColumn)('text', {
        unique: true,
    }),
    __metadata("design:type", String)
], Producto.prototype, "codigo", void 0);
__decorate([
    (0, typeorm_1.Column)('text', {
        unique: true
    }),
    __metadata("design:type", String)
], Producto.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], Producto.prototype, "codgama", void 0);
__decorate([
    (0, typeorm_1.Column)('text', {
        nullable: true
    }),
    __metadata("design:type", String)
], Producto.prototype, "proveedor", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], Producto.prototype, "descripcion", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', nullable: false }),
    __metadata("design:type", Number)
], Producto.prototype, "stock", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', nullable: false }),
    __metadata("design:type", Number)
], Producto.prototype, "pvp", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', nullable: false }),
    __metadata("design:type", Number)
], Producto.prototype, "pcoste", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], Producto.prototype, "imagen", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => omkgama_entity_1.Gama, (gama) => gama.productos, { cascade: true }),
    __metadata("design:type", omkgama_entity_1.Gama)
], Producto.prototype, "gama", void 0);
exports.Producto = Producto = __decorate([
    (0, typeorm_1.Entity)()
], Producto);
//# sourceMappingURL=omkproducto.entity.js.map