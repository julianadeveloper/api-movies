"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = void 0;
const moongose = require("mongoose");
exports.UserSchema = new moongose.Schema({
    id: String,
    name: String,
    email: String,
    password: String,
});
//# sourceMappingURL=user-schema.js.map