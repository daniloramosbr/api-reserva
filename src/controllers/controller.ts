import { Request, Response } from "express";
import { create, findAll } from "../services/service";
import { findReserve } from "../services/service";

class Controller {
  async PostReserve(req: Request, res: Response) {
    
    const body = req.body;

    const reserves = await findAll();

    const exist = reserves.findIndex(function (item) {
      return (
        item.hour == body.hour &&
        item.day == body.day &&
        item.table == body.table
      );
    });

    if (exist != -1) {
      return res.status(400).send({
        message: "horário já existente no sistema.",
      });
    }

    try {
      const response = await create(body);

      res.status(201).send({
        message: "criado com sucesso!",
        response
      })

    } catch (error) {
     return res.status(400).send(error);
    }
  }

  Test (req: Request, res: Response) {

    res.send('teste')

  }



}

export default new Controller();
