"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const loginService_1 = require("../services/loginService");
const loginService_2 = require("../services/loginService");
const loginService_3 = __importDefault(require("../services/loginService"));
class LoginController {
    PostLogin(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const body = req.body;
                const { username, email } = body;
                if (!username || !email) {
                    return res.status(400).send({
                        message: "preencha todos os campos!",
                    });
                }
                const resEmail = yield (0, loginService_2.findEmail)(body.email);
                if (resEmail.length == 0) {
                    const user = yield (0, loginService_1.createLogin)(body);
                    const token = (0, loginService_3.default)(user.id, user.username);
                    return res.status(201).send({
                        message: 'user criado com sucesso!',
                        token: token
                    });
                }
                const token = (0, loginService_3.default)(resEmail[0].id, resEmail[0].username);
                res.status(201).send({
                    message: 'login feito com sucesso!',
                    token: token
                });
            }
            catch (error) {
                return res.status(400).send(error);
            }
        });
    }
}
exports.default = new LoginController();
