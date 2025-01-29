import prisma from "../prismaClient";

export default async function termSeeder() {
    const user = await prisma.user.findFirst({ where: { email: "quizzard.web@gmail.com" } });

    if (user) {
        const quiz1 = await prisma.quiz.findFirst({ where: { title: "Decoding the Market", ownerId: user.id }});
        const quiz2 = await prisma.quiz.findFirst({ where: { title: "MedMastery: Healing the Mind and Body", ownerId: user.id }});
        const quiz3 = await prisma.quiz.findFirst({ where: { title: "History in Motion", ownerId: user.id }});

        if (quiz1) {
            await prisma.term.createMany({
                data: [
                    {
                        term: "Supply and Demand",
                        definition: "The economic model that explains how the price and quantity of goods and services are determined in a market based on the relationship between supply (the amount of goods available) and demand (the desire of buyers for those goods).",
                        quizId: quiz1.id,
                        lastUpdatedById: user.id
                    },
                    {
                        term: "Inflation",
                        definition: "The rate at which the general level of prices for goods and services is rising, and subsequently, the purchasing power of currency is falling.",
                        quizId: quiz1.id,
                        lastUpdatedById: user.id
                    },
                    {
                        term: "Gross Domestic Product (GDP)",
                        definition: "The total value of all goods and services produced within a country over a specific period, often used to measure the health of a country's economy.",
                        quizId: quiz1.id,
                        lastUpdatedById: user.id
                    },
                    {
                        term: "Monetary Policy",
                        definition: "The process by which the central bank of a country controls the supply of money, often targeting an inflation rate or interest rate to ensure price stability and general trust in the currency.",
                        quizId: quiz1.id,
                        lastUpdatedById: user.id
                    },
                    {
                        term: "Fiscal Policy",
                        definition: "The use of government spending and tax policies to influence economic conditions, including demand, employment, and inflation.",
                        quizId: quiz1.id,
                        lastUpdatedById: user.id
                    },
                    {
                        term: "Market Equilibrium",
                        definition: "The state in which the supply of a good or service matches the demand for it, resulting in a stable market price.",
                        quizId: quiz1.id,
                        lastUpdatedById: user.id
                    },
                    {
                        term: "Elasticity",
                        definition: "A measure of how much the quantity demanded or supplied of a good changes in response to a change in price.",
                        quizId: quiz1.id,
                        lastUpdatedById: user.id
                    },
                    {
                        term: "Opportunity Cost",
                        definition: "The cost of forgoing the next best alternative when making a decision.",
                        quizId: quiz1.id,
                        lastUpdatedById: user.id
                    },
                    {
                        term: "Unemployment Rate",
                        definition: "The percentage of the labor force that is jobless and actively looking for work.",
                        quizId: quiz1.id,
                        lastUpdatedById: user.id
                    },
                    {
                        term: "Monopoly",
                        definition: "A market structure where a single seller or producer controls the entire supply of a good or service, often resulting in higher prices and reduced competition.",
                        quizId: quiz1.id,
                        lastUpdatedById: user.id
                    }
                ]                
            })
        }

        if (quiz2) {
            await prisma.term.createMany({
                data: [
                    {
                        term: "Anatomy",
                        definition: "The branch of biology that deals with the structure of living organisms, including the organs, tissues, and cells that make up the body.",
                        quizId: quiz2.id,
                        lastUpdatedById: user.id
                    },
                    {
                        term: "Physiology",
                        definition: "The study of the functions and processes of the body and its systems, focusing on how organs and tissues work together to maintain homeostasis.",
                        quizId: quiz2.id,
                        lastUpdatedById: user.id
                    },
                    {
                        term: "Homeostasis",
                        definition: "The process by which the body maintains a stable internal environment despite external changes, critical for normal bodily function.",
                        quizId: quiz2.id,
                        lastUpdatedById: user.id
                    },
                    {
                        term: "Pathology",
                        definition: "The study of diseases, including their causes, mechanisms, effects on the body, and how they manifest in tissues and organs.",
                        quizId: quiz2.id,
                        lastUpdatedById: user.id
                    },
                    {
                        term: "Immunology",
                        definition: "The branch of medicine that deals with the immune system, studying how the body defends itself against pathogens and diseases.",
                        quizId: quiz2.id,
                        lastUpdatedById: user.id
                    },
                    {
                        term: "Pharmacology",
                        definition: "The science of drugs, including how they interact with biological systems to produce therapeutic effects and how they are metabolized by the body.",
                        quizId: quiz2.id,
                        lastUpdatedById: user.id
                    },
                    {
                        term: "Osteopathy",
                        definition: "A branch of medicine focused on the diagnosis and treatment of musculoskeletal conditions, particularly through physical manipulation and adjustment of the body.",
                        quizId: quiz2.id,
                        lastUpdatedById: user.id
                    },
                    {
                        term: "Pediatrics",
                        definition: "The branch of medicine that deals with the health and medical care of infants, children, and adolescents.",
                        quizId: quiz2.id,
                        lastUpdatedById: user.id
                    },
                    {
                        term: "Surgery",
                        definition: "A medical specialty that involves the physical intervention to treat or remove diseases, injuries, or conditions through various operative techniques.",
                        quizId: quiz2.id,
                        lastUpdatedById: user.id
                    },
                    {
                        term: "Neurology",
                        definition: "The branch of medicine that focuses on the diagnosis and treatment of disorders of the nervous system, including the brain, spinal cord, and nerves.",
                        quizId: quiz2.id,
                        lastUpdatedById: user.id
                    }
                ]
                
            })
        }

        if (quiz3) {
            await prisma.term.createMany({
                data: [
                    {
                        term: "Renaissance",
                        definition: "A period of cultural rebirth and revival of classical learning and values that began in Italy in the 14th century and spread across Europe.",
                        quizId: quiz3.id,
                        lastUpdatedById: user.id
                    },
                    {
                        term: "Industrial Revolution",
                        definition: "The transition to new manufacturing processes in Europe and the United States from the late 18th century to the mid-19th century, marking a significant shift in industry and economy.",
                        quizId: quiz3.id,
                        lastUpdatedById: user.id
                    },
                    {
                        term: "World War I",
                        definition: "A global conflict that lasted from 1914 to 1918, involving most of the world's great powers, often referred to as 'The Great War.'",
                        quizId: quiz3.id,
                        lastUpdatedById: user.id
                    },
                    {
                        term: "World War II",
                        definition: "A global conflict from 1939 to 1945, involving the majority of the world's nations, ultimately leading to major political, social, and territorial changes.",
                        quizId: quiz3.id,
                        lastUpdatedById: user.id
                    },
                    {
                        term: "French Revolution",
                        definition: "A period of social and political upheaval in France (1789–1799), marked by the overthrow of the monarchy and the establishment of the First French Republic.",
                        quizId: quiz3.id,
                        lastUpdatedById: user.id
                    },
                    {
                        term: "Cold War",
                        definition: "The geopolitical tension between the Soviet Union and the United States, along with their respective allies, following World War II until the early 1990s.",
                        quizId: quiz3.id,
                        lastUpdatedById: user.id
                    },
                    {
                        term: "American Revolution",
                        definition: "The conflict between Great Britain and thirteen of its North American colonies from 1775 to 1783, which led to the formation of the United States of America.",
                        quizId: quiz3.id,
                        lastUpdatedById: user.id
                    },
                    {
                        term: "Civil Rights Movement",
                        definition: "A social and political movement in the United States during the 1950s and 1960s, aimed at ending racial discrimination and securing equal rights for African Americans.",
                        quizId: quiz3.id,
                        lastUpdatedById: user.id
                    },
                    {
                        term: "Ancient Egypt",
                        definition: "An ancient civilization that flourished along the Nile River from around 3100 BCE to 30 BCE, known for its monumental architecture, hieroglyphic writing, and religious practices.",
                        quizId: quiz3.id,
                        lastUpdatedById: user.id
                    },
                    {
                        term: "Roman Empire",
                        definition: "A large empire centered around the Mediterranean that spanned from 27 BCE to 476 CE, famous for its contributions to law, government, and military organization.",
                        quizId: quiz3.id,
                        lastUpdatedById: user.id
                    }
                ]
            })
        }
    }
}