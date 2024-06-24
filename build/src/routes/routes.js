"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = __importDefault(require("../controllers/controller"));
const loginController_1 = __importDefault(require("../controllers/loginController"));
const routes = (0, express_1.Router)();
routes.post("/login", loginController_1.default.PostLogin);
routes.post("/reserva", controller_1.default.PostReserve);
routes.get("/reserva/:id", controller_1.default.GetReserve);
routes.patch("/reserva/:id", controller_1.default.EditReserve);
routes.delete("/reserva/:id", controller_1.default.DeleteReserve);
exports.default = routes;
