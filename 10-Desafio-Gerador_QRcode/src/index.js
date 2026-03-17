import prompt from 'prompt';
import { promptSchemaMain } from "./prompt-schemas/prompt-schema-main.js";
import { createQrCode } from './services/qrcode/create-qrcode.js';
import { createPassWord } from './services/password/create-password.js';


async function main() {

    prompt.get(promptSchemaMain, async (err, result) => {
        console.log();
        if (err) console.log(err);
        if (result.select == 1) await createQrCode();
        if (result.select == 2) await createPassWord();
        console.log();
    });
    prompt.start();

};


main();