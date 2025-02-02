import { Tag } from "@prisma/client";
import prisma from "../prismaClient";

const TAGS: Pick<Tag, "name">[] = [
    { name: "agriculture" },
    { name: "anthropology" },
    { name: "archaeology" },
    { name: "architecture" },
    { name: "area_studies" },
    { name: "astronomy" },
    { name: "atmospheric_sciences" },
    { name: "biology" },
    { name: "chemistry" },
    { name: "communication_studies" },
    { name: "computer_science" },
    { name: "criminology" },
    { name: "culinary_arts" },
    { name: "dentistry" },
    { name: "divinity" },
    { name: "earth_sciences" },
    { name: "ecology" },
    { name: "economics" },
    { name: "engineering" },
    { name: "environmental_studies" },
    { name: "ethnic_and_cultural_studies" },
    { name: "geography" },
    { name: "history" },
    { name: "law" },
    { name: "linguistics_and_languages" },
    { name: "literature" },
    { name: "logic" },
    { name: "mathematics" },
    { name: "medicine" },
    { name: "neuroscience" },
    { name: "nursing" },
    { name: "oceanography" },
    { name: "organizational_studies" },
    { name: "performing_arts" },
    { name: "pharmacy" },
    { name: "philosophy" },
    { name: "physics" },
    { name: "political_science" },
    { name: "psychology" },
    { name: "public_health" },
    { name: "religion" },
    { name: "sociology" },
    { name: "space_sciences" },
    { name: "statistics" },
    { name: "systems_science" },
    { name: "the_arts" },
    { name: "veterinary_medicine" },
    { name: "visual_arts" },
];

export default async function tagSeeder() {
    TAGS.forEach(async function (tag) {
        await prisma.tag.upsert({
            where: {
                name: tag.name
            },
            update: {},
            create: {
                name: tag.name
            }
        })
    });
}
