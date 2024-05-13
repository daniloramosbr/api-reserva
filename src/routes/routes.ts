import { Router} from "express";
import controller from "../controllers/controller";
import loginController from "../controllers/loginController";

const routes = Router()

routes.post("/reserva", controller.PostReserve)
routes.post("/login", loginController.PostLogin)

export default routes