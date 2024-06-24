"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateId = exports.deleteService = exports.findReserve = exports.findAll = exports.create = void 0;
const reserva_1 = __importDefault(require("../models/reserva"));
const create = (body) => reserva_1.default.create(body);
exports.create = create;
const findAll = () => reserva_1.default.find().select('-_id');
exports.findAll = findAll;
const findReserve = (user) => reserva_1.default.find({ user: user });
exports.findReserve = findReserve;
const deleteService = (id) => reserva_1.default.findOneAndDelete({ _id: id });
exports.deleteService = deleteService;
const updateId = (id, body) => reserva_1.default.findByIdAndUpdate({ _id: id }, {
    "table": body.table,
    "day": body.day,
    "hour": body.hour
});
exports.updateId = updateId;
