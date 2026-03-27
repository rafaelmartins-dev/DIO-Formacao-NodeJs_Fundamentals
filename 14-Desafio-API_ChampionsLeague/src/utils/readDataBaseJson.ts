import * as fs from 'node:fs/promises';


export const readDataBaseJson = async <T>(path: string): Promise<T> => {

    let fileContent = await fs.readFile(path, 'utf-8');
    const data = JSON.parse(fileContent) as T;

    return data;
}