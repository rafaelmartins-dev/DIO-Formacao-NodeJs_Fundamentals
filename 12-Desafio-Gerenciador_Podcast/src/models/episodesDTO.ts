import { Episode } from "./episode-model";

export interface EpisodesDTO {
    statusCode: number;
    body: Episode[];
}