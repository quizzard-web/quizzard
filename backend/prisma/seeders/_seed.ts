import quizSeeder from "./quizSeeder";
import tagSeeder from "./tagSeeder";
import termSeeder from "./termSeeder";
import userSeeder from "./userSeeder";

/**
 * this is the master database seeder function
 * and should only be run ONCE upon initialization of the database
 * 
 * the seeder functions here are called SEQUENTIALLY
 * changing the order of the function calls will cause issues
 */
async function seed() {
    try {
        await userSeeder();
        await tagSeeder();
        await quizSeeder();
        await termSeeder();
    } catch (e) {
        console.error(e);
        process.exit(1);
    } finally {
        console.log("Database seeded successfully.");
    }
}

seed();
