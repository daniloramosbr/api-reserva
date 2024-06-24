import reserve from "../models/reserva";

export const create = (body: string) => reserve.create(body)
export const findAll = () => reserve.find().select('-_id')
export const findReserve = (user: string) => reserve.find({user: user})
export const deleteService = (id: string) => reserve.findOneAndDelete({_id: id})
export const updateId = (id: string, body: any) => reserve.findByIdAndUpdate({_id: id}, {
"table": body.table,
"day": body.day,
"hour": body.hour
})
