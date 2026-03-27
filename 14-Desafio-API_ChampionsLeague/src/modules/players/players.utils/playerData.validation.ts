
/**
 * Valida se o body recebido na requisição possui todos os campos obrigatórios do PlayerModel
 * Retorna true se estiver válido, false caso contrário
 */
export function validatePlayerData(body: any): boolean {
    // 1️⃣ Verifica se o body existe e não está vazio
    //    Ex.: se body for null, undefined ou {}
    if (!body || Object.keys(body).length === 0) return false;

    // 2️⃣ Lista de campos obrigatórios no PlayerModel
    const requiredFields = ["id", "name", "nacionality", "clubId", "position", "statistics"];

    // 3️⃣ Checa se algum campo obrigatório está faltando
    //    'some' retorna true se pelo menos um elemento do array atender à condição
    const missingFields = requiredFields.some(field => body[field] === undefined);
    if (missingFields) return false;

    // 4️⃣ Campos obrigatórios dentro do objeto statistics
    const statFields = ["overall", "pace", "shooting", "passing", "dribbling", "defending", "physical"];
    const statistics = body.statistics;

    // 5️⃣ Verifica se statistics existe e é um objeto
    if (!statistics || typeof statistics !== "object") return false;

    // 6️⃣ Verifica se algum campo dentro de statistics está faltando
    const missingStats = statFields.some(f => statistics[f] === undefined);
    if (missingStats) return false;

    // 7️⃣ Se passou por todas as checagens, retorna true
    return true;
}