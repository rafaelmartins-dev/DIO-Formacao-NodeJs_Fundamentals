import QRCode from 'qrcode';
import { styleText } from 'node:util';
import { execSync } from 'node:child_process';
import path from 'node:path';




export async function handleQrCode(err, result) {
    if (err) {
        console.log("Error on application!");
        return;
    };

    // Gerar QR Code para arquivo .png
    if (result.type == 1) {

        // Obter o caminho da pasta de downloads do usuário
        const downloadsPath = execSync('xdg-user-dir DOWNLOAD').toString().trim();
        const filePath = path.join(downloadsPath, 'qrcode.png');

        QRCode.toFile(filePath, result.link, (err) => {
            if (err) {
                console.log(`Error on application: ${err}`);
                return;
            };

            console.log(`QR Code salvo na pasta Downloads`);
        });
    };


    // Gerar QR Code para terminal
    if (result.type == 2) {
        QRCode.toString(result.link, { type: 'terminal' }, (err, qrcode) => {
            if (err) {
                console.log(`Error on application: ${err}`);
                return;
            };

            console.log("QR Code gerado com sucesso:\n");
            console.log(qrcode);
        });
    };

}