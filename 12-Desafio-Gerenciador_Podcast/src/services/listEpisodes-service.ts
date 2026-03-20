import { EpisodesDTO } from "../models/episodesDTO";
import { episodeRepository } from "../repositories/epsisodes-repository";
import { StatusCode } from "../utils/statusCode";

export const listEpisodesService = async (): Promise<EpisodesDTO> => {

    // crio o contrato de resposta
    let response: EpisodesDTO = {
        statusCode: 0,
        body: []
    };

    // busco os dados do repositório
    const data = await episodeRepository();

    //verificar se tem conteúdo
    response.statusCode = data.length > 0 ? StatusCode.OK : StatusCode.NO_CONTENT;
    response.body = data;

    return response;
};
