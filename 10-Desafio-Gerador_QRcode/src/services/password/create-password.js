import { styleText } from 'node:util';
import { handlePassWord } from './handle-password.js';


export async function createPassWord() {
    console.log(styleText(['green', 'bold'], 'PassWord criado:\n'));
    const passWord = await handlePassWord();
    console.log(styleText(['red'], passWord));
};