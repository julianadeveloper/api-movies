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
exports.MoviesController = void 0;
const common_1 = require("@nestjs/common");
const movies_entity_1 = require("../entitys/movies-entity");
const movies_service_1 = require("../services/movies.service");
let MoviesController = class MoviesController {
    constructor(moviesSerivce) {
        this.moviesSerivce = moviesSerivce;
    }
    async getAllMovies(movies) {
        return await this.moviesSerivce.getMovies(movies);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [movies_entity_1.Movies]),
    __metadata("design:returntype", Promise)
], MoviesController.prototype, "getAllMovies", null);
MoviesController = __decorate([
    (0, common_1.Controller)('movies'),
    __metadata("design:paramtypes", [movies_service_1.MoviesService])
], MoviesController);
exports.MoviesController = MoviesController;
//# sourceMappingURL=movies.controller.js.map