import fs from 'node:fs';
import path from 'node:path';
import { Episode } from '../models/episode-model';

// definindo o caminho para o arquivo JSON que contém os dados dos episódios
const pathEpisodesData = path.join(__dirname, '../repositories/episodes.json');

export const episodeRepository = async (podcastName?: string): Promise<Episode[]> => {
    // lendo o arquivo que contém os dados dos episódios de forma síncrona
    const rawData = fs.readFileSync(pathEpisodesData, 'utf-8');

    // convertendo os dados lidos para um JSON
    let episodes: Episode[] = JSON.parse(rawData);

    if (podcastName) {
        // filtrando os episódios com base no nome do podcast
        episodes = episodes.filter((episode: Episode) => episode.podcastName.toLowerCase() === podcastName.toLowerCase());
    }

    return episodes;
}