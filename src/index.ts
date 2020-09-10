import express, { Application, Request, Response, NextFunction } from "express";
import morgan from "morgan";

import CORSMiddleware from "./config/CORS.config";

import * as logConfig from "./config/log.config";

import publicController from "./controllers/public.controller";

class Server {

    public app: Application;
    
    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    config(): void {
        this.app.set("port", process.env.PORT || 3000);

        this.app.use(CORSMiddleware);

        this.configMorgan();
        logConfig.initLogger();
        
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
    }

    configMorgan(): void {
      morgan.token("id", (req: Request, res: Response) => {
        return res.getHeader("X-Request-Id") as string;
      });

      this.app.use(logConfig.morganTokenMiddleware);
      this.app.use(morgan(":id :method :url :status :response-time"));
    }

    routes(): void {
        this.app.use("/", publicController);
    }

    start() {
      this.app.listen(this.app.get("port"), () => {
          console.log("Server on port", this.app.get("port"));
      });
    }

}

const server = new Server();
server.start();