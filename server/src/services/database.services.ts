import mysql from 'mysql2';
import {config} from "dotenv";
import Logger from './logger.services';

config();//use .env in project

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
});

db.connect((err) => {
  if (err) {
    Logger.error('Lỗi kết nối cơ sở dữ liệu:', err.stack);
    return;
  }
  Logger.info(`Đã kết nối đến cơ sở dữ liệu MySQL với ID: ${db.threadId}`);
});

export default db;