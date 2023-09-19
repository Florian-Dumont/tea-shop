import { Router } from "express";
import home_routes from "./admin.routes.js"
import tea_routes from "./tea.routes.js"
import user_routes from "./user.routes.js"


const router = Router();

router.get("/", home_routes )

router.use("/api/v1/tea", tea_routes);
router.use("/api/v1/user", user_routes);

router.get("*", (req, res) => {
    res.status(404).json({ msg: "not found" });
});

export default router;