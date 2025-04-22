import { Router } from "express";

export function bindRoutes<T>(
  router: Router,
  controller: T,
  routes: Array<
    [method: "get" | "post" | "put" | "delete", path: string, handler: keyof T]
  >
): Router {
  routes.forEach(([method, path, handler]) => {
    const fn = controller[handler];
    if (typeof fn === "function") {
      (router as any)[method](path, fn.bind(controller));
    } else {
      throw new Error(`Handler '${String(handler)}' not found on controller.`);
    }
  });
  return router;
}
