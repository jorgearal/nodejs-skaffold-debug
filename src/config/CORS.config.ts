import { Response, Request, NextFunction } from "express";

// CORS Middleware
export const CORSMiddleware = (req: Request, res: Response, next: NextFunction): void => {
    // REVISAR: agregar Api Connect
    res.header("Access-Control-Allow-Origin", process.env.CORS_ALLOWED_ORIGIN);
    res.header("Access-Control-Allow-Methods", "GET, POST");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, contentType,Content-Type, Accept, Transaccion-Id, Aliado-Id, System-Id, Ip-Client");
  
    // Intercepto el metodo OPTIONS
    // CORS Preflight
    if ("OPTIONS" == req.method) {
      res.sendStatus(200);
    } else {
      next();
    }
};

export default CORSMiddleware;