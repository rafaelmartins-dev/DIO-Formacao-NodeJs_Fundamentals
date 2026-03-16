import { conectDatabase } from "./data/data.js";


console.log("\nAprendendo sobre variáveis de ambiente com Node.js\n");


async function main() {
    console.log(process.env.USERDATABASE);
    console.log(process.env.PASSWORDDATABASE);

    console.log();
    await conectDatabase(process.env.USERDATABASE, process.env.PASSWORDDATABASE);
    console.log();
};

main();