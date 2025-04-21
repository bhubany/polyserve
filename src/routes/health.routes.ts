import { HealthController } from "@/controllers/health.controller";
import { Router } from "express";
import { container } from "tsyringe";

const healthRoutes = Router();
const controller = container.resolve(HealthController);
healthRoutes.get("", controller.health);
healthRoutes.get("/live", controller.live);
healthRoutes.get("/ready", controller.ready);
healthRoutes.get("/metrics", controller.metrics);

export default healthRoutes;
