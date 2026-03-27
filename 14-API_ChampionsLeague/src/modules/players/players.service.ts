import { PlayerModel } from "@/modules/players/player.model";
import { APIResponse } from "@/types/apiResponse";
import { HttpStatus } from "@/types/httpStatusCode";
import { playersRepository } from "@/modules/players/players.repository";
import { StatiscsModel } from "@/modules/players/statistics.model";


class PlayersService {

    async getAll(): Promise<APIResponse<PlayerModel[] | null>> {

        const data = await playersRepository.getAll();

        if (data.length === 0) {
            const response: APIResponse<null> = {
                status: HttpStatus.NOT_FOUND,
                message: 'No players found',
                data: null
            }
            return response;
        }

        const response: APIResponse<PlayerModel[]> = {
            status: HttpStatus.OK,
            message: 'Players retrieved successfully',
            data: data
        }

        return response;

    }


    async getById(playerId: number): Promise<APIResponse<PlayerModel | null>> {

        const data: PlayerModel | undefined = await playersRepository.getById(playerId);

        if (!data) {
            const response: APIResponse<null> = {
                status: HttpStatus.NOT_FOUND,
                message: `Player with id ${playerId} not found`,
                data: null
            }
            return response;
        }

        const response: APIResponse<PlayerModel> = {
            status: HttpStatus.OK,
            message: 'Player retrieved successfully',
            data: data
        }

        return response;

    }


    async create(playerData: PlayerModel): Promise<APIResponse<PlayerModel>> {

        const playerId: number = await playersRepository.insert(playerData);

        const response: APIResponse<PlayerModel> = {
            status: HttpStatus.CREATED,
            message: 'Player created successfully',
            data: { ...playerData, id: playerId }
        }

        return response;

    }


    async delete(playerId: number): Promise<APIResponse<{ id: number, name: string } | null>> {

        const data: { id: number, name: string } | null = await playersRepository.delete(playerId);

        if (!data) {
            const response: APIResponse<null> = {
                status: HttpStatus.NOT_FOUND,
                message: `Player with id ${playerId} not found`,
                data: null
            }
            return response;
        }

        const response: APIResponse<{ id: number, name: string }> = {
            status: HttpStatus.OK,
            message: 'Player deleted successfully',
            data: data
        }

        return response;
    }


    async findAndUpdate(playerId: number, statisticsData: StatiscsModel): Promise<APIResponse<PlayerModel | null>> {

        const data: PlayerModel | null = await playersRepository.findAndUpdate(playerId, statisticsData);

        if (!data) {
            const response: APIResponse<null> = {
                status: HttpStatus.NOT_FOUND,
                message: `Player with id ${playerId} not found`,
                data: null
            }
            return response;
        }

        const response: APIResponse<PlayerModel> = {
            status: HttpStatus.OK,
            message: `Player updated successfully`,
            data: data
        }

        return response;
    }

}


export const playersService = new PlayersService(); 
