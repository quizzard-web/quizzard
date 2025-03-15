
import _ from "lodash";
import { Router } from "express";
import { prisma } from "../prisma/prismaClient";

const router = Router();

router.get("/quiz", async (req, res) => {
    const quizzes = await prisma.quiz.findMany();

    res.json(quizzes);
});

router.get("/user", async (req, res) => {
    const jwtUser = req.user;
    const user = await prisma.user.findUnique({ where: { id: jwtUser?.userId }});

    if (user) {
        res.json(user);
    } else {
        res.send(401);
    }
});

export default router;
