import express from "express";
import prisma from "./prisma/prismaClient";
import router from "./routes";

const app = express();

app.listen(3000, () => console.log("app is running"));

app.use(router);

async function testFetch() {
    const quiz = await prisma.quiz.findUnique({
        where: {
            title: "Decoding the Market" 
        },
        include: {
            terms: true
        }
    });

    console.log(quiz?.terms);
}

testFetch();
