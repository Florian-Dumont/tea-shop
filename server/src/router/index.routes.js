import { Router } from "express";
import home_routes from "./admin.routes.js"


const router = Router();

router.get("/", home_routes )
export default router;