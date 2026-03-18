export async function getBaseEmail(sendername: string): Promise<string> {

    let baseEmail: string = await getHeaderText();
    baseEmail += `Olá ${sendername}, gostaria de me inscrever para uma vaga.`;
    baseEmail += " Estou deixando o meu currículo e anexo.";

    return baseEmail;
}


async function getHeaderText(): Promise<string> {
    return "E-mail para você.";
}
