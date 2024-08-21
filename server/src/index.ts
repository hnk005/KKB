
import express from 'express';
import {config} from "dotenv";
import router from './routes/api.user.routes';
import cookieParser from 'cookie-parser';
import morganMiddleware from './middlewares/morgan.middlewares';
import Logger from './services/logger.services';
import { catchError } from './middlewares/error.middlewares';


config();//use .env in projectw

const server = express();
const host = process.env.HOST;
const port = process.env.PORT;

server.use(morganMiddleware);
server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use(cookieParser());
server.use('/api', router);
server.use(catchError);

server.listen(port, () => {
    Logger.info(`Server is running on http://${host}:${port}/api`);
})


export default server;
