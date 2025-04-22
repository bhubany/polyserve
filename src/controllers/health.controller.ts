import { AppResponse } from "@//common/AppResponse";
import { Authorize } from "@/security/decorators/authorize.decorator";
import { Request, Response } from "express";
import { injectable } from "tsyringe";

@injectable()
export class HealthController {
  constructor() {}

  @Authorize({ bypass: true })
  async health(req: Request, res: Response): Promise<void> {
    AppResponse.success(res, "server is running");
  }

  @Authorize({ bypass: true })
  async live(req: Request, res: Response): Promise<void> {
    res.status(200).send("I'm alive!");
  }

  @Authorize({ bypass: true })
  async ready(req: Request, res: Response): Promise<void> {
    // const dbReady = await checkDbConnection(); // Your DB ping logic
    const dbReady = true;

    if (dbReady) {
      res.status(200).send("I'm ready!");
    } else {
      res.status(503).send("Not ready");
    }
  }

  @Authorize({ bypass: true })
  async metrics(req: Request, res: Response): Promise<void> {
    const mem = process.memoryUsage();
    const uptime = process.uptime();

    res.json({
      memory: {
        rss: mem.rss,
        heapUsed: mem.heapUsed,
        heapTotal: mem.heapTotal,
      },
      uptime: `${Math.round(uptime)}s`,
      timestamp: new Date(),
    });
  }
}
