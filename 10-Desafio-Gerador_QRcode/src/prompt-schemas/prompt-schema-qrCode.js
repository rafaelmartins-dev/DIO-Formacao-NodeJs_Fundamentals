import { styleText } from 'node:util';


export const promptSchemaQrCode = [
    {
        name: "link",
        description: styleText(['yellow', 'bold'], "Digite o link para gerar o QR Code:\n\n>"),
        required: true
    },
    {
        name: "type",
        description: (
            styleText(['yellow', 'bold'], "Escolha o tipo do QR Code:\n")
            + styleText(['yellow', 'bold'], "[1] Normal (arquivo .png)\n")
            + styleText(['yellow', 'bold'], "[2] Terminal\n\n>")
        ),
        pattern: /^[12]$/,
        message: styleText(['red', 'italic'], "Escolha apenas entre 1 ou 2\n"),
        required: true
    }

];