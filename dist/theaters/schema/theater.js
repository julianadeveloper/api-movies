"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TheaterShema = void 0;
const moongose = require("mongoose");
exports.TheaterShema = new moongose.Schema({
    thaterId: String,
    location: Array,
});
//# sourceMappingURL=theater.js.map