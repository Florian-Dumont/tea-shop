import { Router } from "express";
import { getAll, getPrice, getCategory } from "../../controller/tea.js";

const router = Router();

router.get("/all", getAll);
router.get("/price", getPrice);
router.get("/categories", getCategory);

export default router;