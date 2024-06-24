"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findEmail = exports.findLogin = exports.createLogin = void 0;
const login_1 = __importDefault(require("../models/login"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const createLogin = (body) => login_1.default.create(body);
exports.createLogin = createLogin;
const findLogin = () => login_1.default.find();
exports.findLogin = findLogin;
const findEmail = (email) => login_1.default.find({ email: email });
exports.findEmail = findEmail;
function generateToken(id, user) {
    return jsonwebtoken_1.default.sign({ id: id,
        user: user }, '35465434597257', { expiresIn: 86400 });
}
exports.default = generateToken;
