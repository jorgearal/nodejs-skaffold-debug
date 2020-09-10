import { Router, Request, Response } from "express";
import { logger } from "../config/log.config";

class PublicController {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get("/", (req: Request, res: Response) => {
            /*
            logger.warn(res.getHeader("X-Request-Id") as string, {
                err: "yaper",
                hola: "message"
            });
            */
            res.send({
                status: "OKKKKKKKSSX"
            });
        });
    }

}

export default new PublicController().router;