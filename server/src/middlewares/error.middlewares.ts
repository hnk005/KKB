import {Request, Response, NextFunction} from 'express';
import Logger from '~/services/logger.services';

export const catchError = async (err: Error, req: Request, res: Response, next: NextFunction) => {
    await ErrorHandler.handleError(err);
}

class ErrorHandler {
    static async handleError(err: Error): Promise<void> {
      Logger.error(err)
    }
}

export default ErrorHandler;