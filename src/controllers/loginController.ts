import { Request, Response } from "express";
import { createLogin, findLogin } from "../services/loginService";
import { findEmail } from "../services/loginService";
import generateToken from "../services/loginService";

class LoginController {

  async PostLogin(req: Request, res: Response) {
    try {
      const body = req.body;

      const { username, email } = body;

      if (!username || !email) {
        return res.status(400).send({
          message: "preencha todos os campos!",
        });
      }

      const resEmail = await findEmail(body.email);

      if (resEmail.length == 0) {
        
        const user = await createLogin(body);

        const token = generateToken(user.id, user.username);

        return res.status(201).send({
          message: 'user criado com sucesso!',
          token: token
        });
      }

      const token = generateToken(resEmail[0].id, resEmail[0].username);

      res.status(201).send({
        message: 'login feito com sucesso!',
        token:token
      });
      
    } catch (error) {

      return res.status(400).send(error);
    }
  }
}

export default new LoginController();
