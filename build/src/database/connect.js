"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConnectDB = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const ConnectDB = () => {
    console.log('tentando fazer conexão...');
    mongoose_1.default.connect(process.env.MONGO_URL).then(() => {
        console.log('conectado ao banco de dados!');
    }).catch((err) => {
        console.log(err);
    });
};
exports.ConnectDB = ConnectDB;
