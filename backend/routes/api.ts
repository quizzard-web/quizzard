
import _ from "lodash";
import { Router } from "express";
import { prisma } from "../prisma/prismaClient";
import { isAuthenticated } from "./middlewares";

const router = Router();

/**
 * @todo
 * 1. Organize routes by using Controllers
 * 2. Transform model objects sent in the response by creating Resources
 * 3. Create a general response data format
 */
router.get("/quiz", async (req, res) => {
    const quizzes = await prisma.quiz.findMany();

    res.json(quizzes);
});

router.get("/me", async (req, res) => {
    const authUser = req.user;
    const user = await prisma.user.findUnique({ where: { id: authUser?.id }});

    if (!user) {
        res.send(404);
    }

    res.json({
        firstName: user?.firstName,
        lastName: user?.lastName,
        email: user?.email,
        gender: user?.gender,
        accountStatus: user?.accountStatus,
        settings: user?.settings
    });
});

export default router;
