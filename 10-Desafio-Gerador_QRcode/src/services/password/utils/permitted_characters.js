
// Verifica os caracteres permitidos para a senha com base nas variáveis de ambiente
export async function permittedCharacters() {
    let permitted = [];

    if (process.env.UPPERCARSE_LETTERS === "true") {
        permitted.push(...'ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    }

    if (process.env.LOWERCASE_LETTERS === "true") {
        permitted.push(...'abcdefghijklmnopqrstuvwxyz');
    }

    if (process.env.NUMBERS === "true") {
        permitted.push(...'0123456789');
    }

    if (process.env.SYMBOLS === "true") {
        permitted.push(...'!@#$%^&*()_+~`|}{[]:;?><,./-=');
    }

    return permitted;
};
