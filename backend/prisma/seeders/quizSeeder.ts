import { isNull } from "lodash";
import { Quiz } from "@prisma/client";
import prisma from "../prismaClient";

export default async function quizSeeder() {
    const user = await prisma.user.findFirst({ where: { email: "quizzard.web@gmail.com" } });

    if (!isNull(user)) {
        const QUIZZES: Omit<Quiz, "id" | "createdAt" | "updatedAt" | "totalAttempts" | "dailyFeatureIds" | "popularFeatureIds">[] = [
            {
                title: "Decoding the Market",
                description: "Dive into the fundamentals of economics, exploring the forces that shape markets, influence decisions, and drive global trends. Perfect for budding economists and market enthusiasts!",
                tags: ["economics"],
                theme: {
                    backgroundColor: "#4CAF50",
                    textColor: "#FF5733",
                    image: "test-img.jpg",
                    accentColor: "1E88E5"
                },
                ownerId: user.id,
                contributorIds: [user.id],
            },
            {
                title: "MedMastery: Healing the Mind and Body",
                description: "Unlock the secrets of the human body and medical science. From understanding diseases to treatments, this set will help you master key concepts in medicine!",
                tags: ["medicine"],
                theme: {
                    backgroundColor: "#4CAF50",
                    textColor: "#FF5733",
                    image: "test-img.jpg",
                    accentColor: "1E88E5"
                },
                ownerId: user.id,
                contributorIds: [user.id],
            },
            {
                title: "History in Motion",
                description: "Take a journey through time and explore the pivotal moments that shaped our world. Learn about revolutions, discoveries, and figures that changed history!",
                tags: ["history"],
                theme: {
                    backgroundColor: "#4CAF50",
                    textColor: "#FF5733",
                    image: "test-img.jpg",
                    accentColor: "1E88E5"
                },
                ownerId: user.id,
                contributorIds: [user.id],
            },
        ];

        QUIZZES.forEach(async function (quizItem) {
            const quiz = await prisma.quiz.findFirst({
                where: {
                    ownerId: user.id,
                    title: {
                        equals: quizItem.title,
                        mode: "insensitive"
                    },
                }
            });

            if (!isNull(quiz)) {
                await prisma.quiz.update({
                    where: {
                        id: quiz.id,
                    },
                    data: { ...quizItem }
                })
            } else {
                await prisma.quiz.create({
                    data: { ...quizItem }
                })
            }
        });

        await Promise.all([
            prisma.tag.update({ where: { name: "economics" }, data: { quiz_count: 1 } }),
            prisma.tag.update({ where: { name: "medicine" }, data: { quiz_count: 1 } }),
            prisma.tag.update({ where: { name: "history" }, data: { quiz_count: 1 } })
        ]);
    }
}
