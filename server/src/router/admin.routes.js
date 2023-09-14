import {Router} from "express";
import { home } from "../controller/admin/index.js";

const router = Router();

// http://localhost:9000/admin
router.get("/", home);


// router.get("/user", user);

export default router; 