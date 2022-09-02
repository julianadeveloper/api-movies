"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentsSchema = void 0;
const moongose = require("mongoose");
exports.CommentsSchema = new moongose.Schema({
    name: String,
    email: String,
    text: String,
    date: String,
});
//# sourceMappingURL=comments-schema.js.map