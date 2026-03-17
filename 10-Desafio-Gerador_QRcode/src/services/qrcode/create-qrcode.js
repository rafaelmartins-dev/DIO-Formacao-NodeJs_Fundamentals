import prompt from 'prompt';
import { promptSchemaQrCode } from "../../prompt-schemas/prompt-schema-qrCode.js";
import { handleQrCode } from './handle-qrcode.js';


export async function createQrCode() {
    prompt.get(promptSchemaQrCode, handleQrCode);
    prompt.start();
};