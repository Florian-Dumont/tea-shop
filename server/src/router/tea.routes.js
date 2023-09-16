import { Router } from "express";
import { getAll, getPrice, getCategory,getProductByCategories } from "../../controller/tea.js";

const router = Router();

router.get("/all", getAll);
router.get("/price", getPrice);
router.get("/categories", getCategory);
router.get("/listing", getProductByCategories);



export default router;