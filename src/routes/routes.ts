import { Router} from "express";
import controller from "../controllers/controller";
import loginController from "../controllers/loginController";

const routes = Router()

routes.post("/login", loginController.PostLogin)
routes.post("/reserva", controller.PostReserve)
routes.get("/reserva/:id", controller.GetReserve)
routes.patch("/reserva/:id", controller.EditReserve)
routes.delete("/reserva/:id", controller.DeleteReserve)


export default routes