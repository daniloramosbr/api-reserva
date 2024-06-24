import { Request, Response } from "express";
import { create, findAll, updateId, deleteService } from "../services/service";
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

  async GetReserve (req: Request, res: Response) {

    const id = req.params.id

   try {
    const response = await findReserve(id);          //busca no banco

    res.status(201).send(response)
    
   } catch (error) {
    return res.status(400).send(error);
   }

  }

  async EditReserve (req: Request, res: Response) {

    const id = req.params.id

    const body = req.body;

    try {

      const response = await updateId(id, body)

      res.status(201).send({
        message: "atualizado com sucesso!",
        response
      })
      
    } catch (error) {
      return res.status(400).send(error);
    }

  }

  async DeleteReserve (req: Request, res: Response) {

    const id = req.params.id;

    try {

      await deleteService(id)

      res.status(201).send({
        message: "deletado com sucesso!"})
      
    } catch (error) {
      return res.status(400).send(error);
    }
  }
}

export default new Controller();
