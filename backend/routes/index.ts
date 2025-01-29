import { Router } from "express";

const router = Router();

router.get("/", function (req, res) {
    res.send("Quizzard!");
})

export default router;