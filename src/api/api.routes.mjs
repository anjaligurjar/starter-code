import { Router } from "express";
import { adminRoutes } from "./admin/admin.routes.mjs";

const router = Router();

router.use(adminRoutes.path, adminRoutes.router);

export const apiRoutes = { path: "/api", router };
