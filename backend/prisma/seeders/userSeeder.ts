import prisma from "../prismaClient";

/**
 * @todo
 * maybe move the values to ENV
 * these data need to be secured
 */
export default async function userSeeder() {
    await prisma.user.upsert({
        where: {
            email: "quizzard.web@gmail.com"
        },
        update: {},
        create: {
            firstName: "Quizzard",
            lastName: "Inc.",
            email: "quizzard.web@gmail.com",
            accountStatus: "verified",
            gender: "non_binary",
            password: "password",
            settings: {
                receiveNewsletter: false,
            },   
        }
    })
}
