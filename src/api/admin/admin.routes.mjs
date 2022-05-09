import { Router } from "express";
import { adminController } from "./admin.controller.mjs";

const router = Router();

router.get('/', adminController.list);
router.post('/', adminController.create);


export const adminRoutes = { path: "/admins", router };
