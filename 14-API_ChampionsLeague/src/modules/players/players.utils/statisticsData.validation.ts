
/**
 * Valida se o body recebido na requisição possui todos os campos obrigatórios do StatiscsModel
 * Retorna true se estiver válido, false caso contrário
 */
export function validateStatisticsData(body: any): boolean {
    // 1️⃣ Verifica se o body existe e não está vazio
    //    Ex.: se body for null, undefined ou {}
    if (!body || Object.keys(body).length === 0) return false;

    // 2️⃣ Lista de campos obrigatórios no StatiscsModel
    const requiredFields = ["overall", "pace", "shooting", "passing", "dribbling", "defending", "physical"];

    // 3️⃣ Checa se algum campo obrigatório está faltando
    //    'some' retorna true se pelo menos um elemento do array atender à condição
    const missingFields = requiredFields.some(field => body[field] === undefined);
    if (missingFields) return false;

    // 7️⃣ Se passou por todas as checagens, retorna true
    return true;
}