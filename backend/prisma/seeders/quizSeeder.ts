import { isNull } from "lodash";
import { prisma } from "../prismaClient";
import { Quiz } from "@prisma/client";

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

        for (const QUIZ of QUIZZES) {
            const quiz = await prisma.quiz.findFirst({
                where: {
                    ownerId: user.id,
                    title: {
                        equals: QUIZ.title,
                        mode: "insensitive"
                    },
                }
            });

            if (!isNull(quiz)) {
                await prisma.quiz.update({
                    where: {
                        id: quiz.id,
                    },
                    data: { ...QUIZ }
                })
            } else {
                await prisma.quiz.create({
                    data: { ...QUIZ }
                })
            }

            await prisma.tag.updateMany({
                where: {
                  name: { in: QUIZ.tags }
                },
                data: {
                  quiz_count: {
                    increment: 1
                  }
                },
            });
        }
    }
}
