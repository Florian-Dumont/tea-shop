import { Router } from "express";
import home_routes from "./admin.routes.js"
import tea_routes from "./tea.routes.js"


const router = Router();

router.get("/", home_routes )

router.use("/api/v1/tea", tea_routes);

router.get("*", (req, res) => {
    res.status(404).json({ msg: "not found" });
});

export default router;