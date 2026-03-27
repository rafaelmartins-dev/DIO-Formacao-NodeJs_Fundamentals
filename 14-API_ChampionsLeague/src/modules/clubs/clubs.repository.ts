//import { clubsDataBase } from "@/data/club.dataBase";
import { ClubModel } from "@/modules/clubs/club.model";
import { readDataBaseJson } from "@/utils/readDataBaseJson";

class ClubsRepository {

    constructor(private dataBasePath: string) { };

    async findAll(): Promise<ClubModel[]> {

        //const data: ClubModel[] = await clubsDataBase;

        const dataBase: ClubModel[] = await readDataBaseJson<ClubModel[]>(this.dataBasePath);

        return dataBase;
    };


    async findById(id: number): Promise<ClubModel | undefined> {

        const dataBase = await this.findAll();

        const data = dataBase.find(club => club.id === id);

        return data;
    }


}


export const clubsRepository = new ClubsRepository(String(process.env.CLUBS_DATABASE_PATH));