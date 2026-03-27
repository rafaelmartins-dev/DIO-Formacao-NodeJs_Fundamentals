import * as fs from 'node:fs/promises';


export const writeDataBaseJson = async <T>(path: string, dataBase: T): Promise<void> => {
    const json = JSON.stringify(dataBase, null, 2); // stringify com indentação
    await fs.writeFile(path, json, "utf-8");
};