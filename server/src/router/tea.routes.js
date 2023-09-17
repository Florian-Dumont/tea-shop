import { Router } from "express";
import { getAll, getPrice, getCategory,getProductByCategories, getNewProduct, getAverageProduct, getFavoriteProduct } from "../../controller/tea.js";

const router = Router();

router.get("/all", getAll);
router.get("/price", getPrice);
router.get("/categories", getCategory);
router.get("/listing", getProductByCategories);
router.get ("/newproduct", getNewProduct);
router.get("/bestseller",getAverageProduct);
router.get("/favorite",getFavoriteProduct);



export default router;