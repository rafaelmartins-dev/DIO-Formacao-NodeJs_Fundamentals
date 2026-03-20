import { IncomingMessage, ServerResponse } from 'node:http';
import { listEpisodesService } from '../services/listEpisodes-service';
import { filterEpisodesService_ByPodcastName } from '../services/filterEpisodes-service';
import { StatusCode } from '../utils/statusCode';
import { EpisodesDTO } from '../models/episodesDTO';


export const getEpisodes = async (req: IncomingMessage, res: ServerResponse) => {

    const content: EpisodesDTO = await listEpisodesService();

    res.writeHead(content.statusCode, { 'content-type': 'application/json' });
    res.write(JSON.stringify(content));
    res.end();
}


export const getFilterEpisodes = async (req: IncomingMessage, res: ServerResponse, queryString: string) => {

    const content: EpisodesDTO = await filterEpisodesService_ByPodcastName(queryString);

    res.writeHead(content.statusCode, { 'content-type': 'application/json' });
    res.write(JSON.stringify(content));
    res.end();

}


export const getHome = async (req: IncomingMessage, res: ServerResponse) => {
    res.writeHead(StatusCode.OK, { 'content-type': 'application/json' });
    res.write(JSON.stringify({ message: 'Gerenciador de Podcasts !!' }));
    res.end();
}