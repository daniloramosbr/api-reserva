import reserve from "../models/reserva";

export const create = (body: string) => reserve.create(body)
export const findAll = () => reserve.find().select('-_id')
export const findReserve = (user: string) => reserve.find({user: user}).select('-_id')
