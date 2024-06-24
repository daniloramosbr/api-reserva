"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const ReserveScheme = new mongoose_1.default.Schema({
    user: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    table: {
        type: String,
        required: true,
    },
    day: {
        type: String,
        required: true,
    },
    hour: {
        type: String,
        required: true,
    },
});
const reserve = mongoose_1.default.model("reserve", ReserveScheme);
exports.default = reserve;
