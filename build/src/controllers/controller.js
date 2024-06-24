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
Object.defineProperty(exports, "__esModule", { value: true });
const service_1 = require("../services/service");
const service_2 = require("../services/service");
class Controller {
    PostReserve(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const body = req.body;
            const reserves = yield (0, service_1.findAll)();
            const exist = reserves.findIndex(function (item) {
                return (item.hour == body.hour &&
                    item.day == body.day &&
                    item.table == body.table);
            });
            if (exist != -1) {
                return res.status(400).send({
                    message: "horário já existente no sistema.",
                });
            }
            try {
                const response = yield (0, service_1.create)(body);
                res.status(201).send({
                    message: "criado com sucesso!",
                    response
                });
            }
            catch (error) {
                return res.status(400).send(error);
            }
        });
    }
    GetReserve(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            try {
                const response = yield (0, service_2.findReserve)(id); //busca no banco
                res.status(201).send(response);
            }
            catch (error) {
                return res.status(400).send(error);
            }
        });
    }
    EditReserve(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            const body = req.body;
            try {
                const response = yield (0, service_1.updateId)(id, body);
                res.status(201).send({
                    message: "atualizado com sucesso!",
                    response
                });
            }
            catch (error) {
                return res.status(400).send(error);
            }
        });
    }
    DeleteReserve(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            try {
                yield (0, service_1.deleteService)(id);
                res.status(201).send({
                    message: "deletado com sucesso!"
                });
            }
            catch (error) {
                return res.status(400).send(error);
            }
        });
    }
}
exports.default = new Controller();
