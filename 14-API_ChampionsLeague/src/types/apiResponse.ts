import { PlayerModel } from "@/modules/players/player.model";
import { ClubModel } from "@/modules/clubs/club.model";

export interface APIResponse<T> {
    status: number;
    message: string;
    data: T;
}