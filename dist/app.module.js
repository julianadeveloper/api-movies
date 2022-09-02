"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const movies_module_1 = require("./movies/modules/movies.module");
const theaters_module_1 = require("./theaters/modules/theaters.module");
const sessions_module_1 = require("./sessions/modules/sessions.module");
const comments_module_1 = require("./comments/modules/comments.module");
const users_module_1 = require("./users/modules/users.module");
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const mongoose_1 = require("@nestjs/mongoose");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forRoot(process.env.MONGODB, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            }),
            users_module_1.UsersModule,
            comments_module_1.CommentsModule,
            theaters_module_1.TheatersModule,
            movies_module_1.MoviesModule,
            sessions_module_1.SessionsModule,
            sessions_module_1.SessionsModule
        ],
        controllers: [
            app_controller_1.AppController,
        ],
        providers: [
            app_service_1.AppService,
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map