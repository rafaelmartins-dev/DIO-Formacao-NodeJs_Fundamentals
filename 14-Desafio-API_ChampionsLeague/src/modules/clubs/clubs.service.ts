import { APIResponse } from "@/types/apiResponse";
import { ClubModel } from "@/modules/clubs/club.model";
import { clubsRepository } from "@/modules/clubs/clubs.repository";
import { HttpStatus } from "@/types/httpStatusCode";


class ClubsService {

    async getAll(): Promise<APIResponse<ClubModel[] | null>> {

        const data: ClubModel[] = await clubsRepository.findAll();

        if (data.length === 0) {
            const response: APIResponse<null> = {
                status: HttpStatus.NOT_FOUND,
                message: 'No clubs found',
                data: null
            }
            return response;
        }

        const response: APIResponse<ClubModel[]> = {
            status: HttpStatus.OK,
            message: 'Clubs retrieved successfully',
            data: data
        }
        return response;
    };


    async findById(id: number): Promise<APIResponse<ClubModel | null>> {

        const data = await clubsRepository.findById(id);

        if (!data) {
            const response: APIResponse<null> = {
                status: HttpStatus.NOT_FOUND,
                message: `Club with id ${id} not found`,
                data: null
            }
            return response;
        }

        const response: APIResponse<ClubModel> = {
            status: HttpStatus.OK,
            message: `Club with id ${id} retrieved successfully`,
            data: data
        }

        return response;
    }
}


export const clubsService = new ClubsService();