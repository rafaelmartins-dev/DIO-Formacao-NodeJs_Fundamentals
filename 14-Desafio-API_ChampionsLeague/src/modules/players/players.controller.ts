import { PlayerModel } from '@/modules/players/player.model';
import { playersService } from '@/modules/players/players.service';
import { APIResponse } from '@/types/apiResponse';
import { HttpStatus } from '@/types/httpStatusCode';
import { Request, Response } from 'express';
import { validatePlayerData } from '@/modules/players/players.utils/playerData.validation';
import { validateId } from '@/utils/IDvalidation';
import { validateStatisticsData } from '@/modules/players/players.utils/statisticsData.validation';
import { StatiscsModel } from '@/modules/players/statistics.model';


class PlayersController {

    async getAll(req: Request, res: Response): Promise<void> {

        const response: APIResponse<PlayerModel[] | null> = await playersService.getAll();

        res.status(response.status).send(response).end;
    }


    async getById(req: Request, res: Response): Promise<void> {

        const idValid = validateId(req.params.id);

        if (!idValid) {
            const response: APIResponse<null> = {
                status: HttpStatus.BAD_REQUEST,
                message: 'Invalid player ID',
                data: null
            }
            res.status(response.status).json(response);
            return;
        }

        const playerId: number = Number(req.params.id);

        const response: APIResponse<PlayerModel | null> = await playersService.getById(playerId);

        res.status(response.status).json(response);

    }


    async create(req: Request, res: Response): Promise<void> {

        const isValid = validatePlayerData(req.body);

        if (!isValid) {
            const response: APIResponse<null> = {
                status: HttpStatus.BAD_REQUEST,
                message: 'Invalid or incomplete player data',
                data: null
            }
            res.status(response.status).json(response);
            return;
        }

        const playerData: PlayerModel = req.body;

        const response: APIResponse<PlayerModel> = await playersService.create(playerData);

        res.status(response.status).json(response);
    }


    async delete(req: Request, res: Response): Promise<void> {

        const idValid = validateId(req.params.id);

        if (!idValid) {
            const response: APIResponse<null> = {
                status: HttpStatus.BAD_REQUEST,
                message: 'Invalid player ID',
                data: null
            }
            res.status(response.status).json(response);
            return;
        }


        const playerId: number = Number(req.params.id);

        const response: APIResponse<{ id: number, name: string } | null> = await playersService.delete(playerId);

        res.status(response.status).json(response);

    }


    async update(req: Request, res: Response): Promise<void> {

        const idValid: boolean = validateId(req.params.id);

        if (!idValid) {
            const response: APIResponse<null> = {
                status: HttpStatus.BAD_REQUEST,
                message: 'Invalid player ID',
                data: null
            }
            res.status(response.status).json(response);
            return;
        }

        const statisticsDataValid: boolean = validateStatisticsData(req.body);

        if (!statisticsDataValid) {
            const response: APIResponse<null> = {
                status: HttpStatus.BAD_REQUEST,
                message: 'Invalid or incomplete statistics data',
                data: null
            }
            res.status(response.status).json(response);
            return;
        }

        const playerId: number = Number(req.params.id);
        const statisticsData: StatiscsModel = req.body;

        const response: APIResponse<PlayerModel | null> = await playersService.findAndUpdate(playerId, statisticsData);

        res.status(response.status).json(response);
    }

}


export const playersController = new PlayersController();