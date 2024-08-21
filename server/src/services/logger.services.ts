import winston from 'winston';

const isDevEnvironment= () => {
  const env = process.env.NODE_ENV || 'development'
  const isDevelopment = env === 'development'
  return isDevelopment ? 'debug' : 'warn'
};

const customLevels = {
  levels: {
    trace: 6,
    http: 5,
    debug: 4,
    info: 3,
    warn: 2,
    error: 1,
    fatal: 0,
  },
  colors: {
    trace: 'white',
    http: 'magenta',
    debug: 'green',
    info: 'green',
    warn: 'yellow',
    error: 'red',
    fatal: 'red',
  },
};
 
const formatter = winston.format.combine(
  winston.format.colorize(),
  winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
  winston.format.splat(),
  winston.format.printf((info) => {
    const { timestamp, level, message, ...meta } = info;
 
    return `${timestamp} [${level}]: ${message} ${
      Object.keys(meta).length ? JSON.stringify(meta, null, 2) : ''
    }`;
  }),
);
 
class Logger {
  private logger: winston.Logger;
 
  constructor() {
    const errorTransport = new winston.transports.File({
      filename: 'logs/error.log',
      level: 'error',
    });
    const allTransport =  new winston.transports.File({ 
      filename: 'logs/all.log'
    });
    const transport = new winston.transports.Console({
      format: formatter,
    });

    const allInTransport = [transport, errorTransport, allTransport];
    
    this.logger = winston.createLogger({
      level: isDevEnvironment() ? 'trace' : 'error',
      levels: customLevels.levels,
      transports: allInTransport,
    });
    winston.addColors(customLevels.colors);
  }
 
  trace(msg: any, meta?: any) {
    this.logger.log('trace', msg, meta);
  }

  http(msg: any, meta?: any) {
    this.logger.http(msg, meta);
  }
 
  debug(msg: any, meta?: any) {
    this.logger.debug(msg, meta);
  }
 
  info(msg: any, meta?: any) {
    this.logger.info(msg, meta);
  }
 
  warn(msg: any, meta?: any) {
    this.logger.warn(msg, meta);
  }
 
  error(msg: any, meta?: any) {
    this.logger.error(msg, meta);
  }
 
  fatal(msg: any, meta?: any) {
    this.logger.log('fatal', msg, meta);
  }
}

export default new Logger;