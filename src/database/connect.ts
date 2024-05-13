import mongoose from "mongoose";

declare global {
    namespace NodeJS {
      interface ProcessEnv {
        MONGO_URL: string;
        NODE_ENV: 'development' | 'production';
        PORT?: string;
        PWD: string;
      }
    }
  }

export const ConnectDB = () => {

    console.log('tentando fazer conexão...')

    mongoose.connect(process.env.MONGO_URL).then(()=> {

        console.log('conectado ao banco de dados!')

    }).catch((err)=> {

    console.log(err)

    })
    
}