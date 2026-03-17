import { styleText } from 'node:util';


export const promptSchemaMain = [{
    name: "select",
    description: (
        styleText(['yellow', 'bold'], "Escolha a Ferramenta:\n\n")
        + styleText(['yellow', 'bold'], "[1] QRcode\n")
        + styleText(['yellow', 'bold'], "[2] PassWord\n\n>")
    ),

    pattern: /^[12]$/,
    message: styleText(['red', 'italic'], "Escolha apenas entre 1 ou 2\n"),
    required: true
}];