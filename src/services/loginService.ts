import login from "../models/login";
import Jwt  from "jsonwebtoken"

export const createLogin = (body: string) => login.create(body)
export const findLogin = () => login.find()
export const findEmail = (email: string) => login.find({email: email})

export default function generateToken(id: string, user: string) {
    return Jwt.sign({ id: id, 
    user: user },'35465434597257', { expiresIn: 86400 });
  }
  