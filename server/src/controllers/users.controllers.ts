import db from '~/services/database.services';
import {Request, Response, NextFunction} from 'express';
import { HttpStatusCode } from '~/contants/httptStatus';
import Logger from '~/services/logger.services';

class User {
    static getAll(req : Request, res : Response, next : NextFunction)  {
        try {
            db.execute('SELECT * FROM User', (err : Error, data : any) => {
                if(err) {
                    Logger.error(err,  __dirname);
                    
                }
                res
                .status(HttpStatusCode.BAD_REQUEST)
                .send({message: 'Susscess'});
            })
            throw 'error'
        } catch(err) {
            
            // throw err;
        }
       
        
    }
}


export default User;