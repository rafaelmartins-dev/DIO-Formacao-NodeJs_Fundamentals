import { EpisodesDTO } from "../models/episodesDTO";
import { episodeRepository } from "../repositories/epsisodes-repository"
import { StatusCode } from "../utils/statusCode";

export const filterEpisodesService_ByPodcastName = async (podcastName: string): Promise<EpisodesDTO> => {

    let response: EpisodesDTO = {
        statusCode: 0,
        body: []
    };

    const data = await episodeRepository(podcastName);

    //verificar se tem conteúdo
    response.statusCode = data.length > 0 ? StatusCode.OK : StatusCode.NO_CONTENT;
    response.body = data;

    return response;
}