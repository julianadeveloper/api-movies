"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyUserSchema = exports.UserSchema = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const moongose = require("mongoose");
const user_1 = require("../entitys/user");
exports.UserSchema = new moongose.Schema({
    username: String,
    name: String,
    email: String,
    password: String,
});
exports.MyUserSchema = mongoose_1.SchemaFactory.createForClass(user_1.User);
//# sourceMappingURL=user-schema.js.map