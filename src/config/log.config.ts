import winston, { Logger } from "winston";
import { v4 as uuidv4 } from "uuid";
import { Response, Request, NextFunction } from "express";

let winstonLogger: Logger;

// Wrap Winston logger to print reqId in each log
const formatMessage = (requestId: string, message: unknown): string => {
    return `${requestId} ${JSON.stringify(message)}`;
};

export const morganTokenMiddleware = (req: Request, res: Response, next: NextFunction): void => {
    res.setHeader("X-Request-Id", uuidv4());
    next();
};

export const initLogger = (): void => {
    winstonLogger = winston.createLogger({
        format: winston.format.json(),
        transports: [
            new winston.transports.Console(),
        ],
    });
};

export const logger = {
    log: (level: string, requestId: string, message: unknown): void => {
        winstonLogger.log(level, formatMessage(requestId, message));
    },
    error: (requestId: string, message: unknown): void => {
        winstonLogger.error(formatMessage(requestId, message));
    },
    warn: (requestId: string, message: unknown): void => {
        winstonLogger.warn(formatMessage(requestId, message));
    },
    verbose: (requestId: string, message: unknown): void => {
        winstonLogger.verbose(formatMessage(requestId, message));
    },
    info: (requestId: string, message: unknown): void => {
        winstonLogger.info(formatMessage(requestId, message));
    },
    debug: (requestId: string, message: unknown): void => {
        winstonLogger.debug(formatMessage(requestId, message));
    },
    silly: (requestId: string, message: unknown): void => {
        winstonLogger.silly(formatMessage(requestId, message));
    }
};
