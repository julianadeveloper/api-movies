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
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TheatersController = void 0;
const common_1 = require("@nestjs/common");
const theaters_service_1 = require("../services/theaters.service");
const theater_entity_1 = require("../entity/theater-entity");
let TheatersController = class TheatersController {
    constructor(theatersService) {
        this.theatersService = theatersService;
    }
    async listTheaters(thetater) {
        try {
            return await this.theatersService.getTheaters(thetater);
        }
        catch (_a) {
            new Error();
        }
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof theater_entity_1.Theater !== "undefined" && theater_entity_1.Theater) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], TheatersController.prototype, "listTheaters", null);
TheatersController = __decorate([
    (0, common_1.Controller)('theaters'),
    __metadata("design:paramtypes", [typeof (_a = typeof theaters_service_1.TheatersService !== "undefined" && theaters_service_1.TheatersService) === "function" ? _a : Object])
], TheatersController);
exports.TheatersController = TheatersController;
//# sourceMappingURL=theaters.controller.js.map