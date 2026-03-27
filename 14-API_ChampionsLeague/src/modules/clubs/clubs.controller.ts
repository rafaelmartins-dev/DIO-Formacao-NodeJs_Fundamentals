import { Request, Response } from 'express';
import { clubsService } from './clubs.service';
import { APIResponse } from '@/types/apiResponse';
import { ClubModel } from './club.model';
import { validateId } from '@/utils/IDvalidation';
import { HttpStatus } from '@/types/httpStatusCode';

class ClubsController {

    async getAll(req: Request, res: Response) {

        const response: APIResponse<ClubModel[] | null> = await clubsService.getAll();

        res.status(response.status).json(response).end();
    };


    async getById(req: Request, res: Response) {

        const isValidId = validateId(req.params.id);

        if (!isValidId) {
            const response: APIResponse<null> = {
                status: HttpStatus.BAD_REQUEST,
                message: 'Invalid club ID',
                data: null
            }
            res.status(response.status).json(response);
            return;
        }

        const id: number = Number(req.params.id);

        const response: APIResponse<ClubModel | null> = await clubsService.findById(id);

        res.status(response.status);
        return res.json(response).end();
    };

}


export const clubsController = new ClubsController();