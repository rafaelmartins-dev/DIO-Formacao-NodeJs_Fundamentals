import { PlayerModel } from "@/modules/players/player.model";
import { StatiscsModel } from "@/modules/players/statistics.model";
import { readDataBaseJson } from "@/utils/readDataBaseJson";
import { writeDataBaseJson } from "@/utils/writeDataBaseJson";



class PlayersRepository {

    constructor(private dataBasePath: string) { };

    async getAll(): Promise<PlayerModel[]> {

        //const data: PlayerModel[] = playersDataBase;

        const data: PlayerModel[] = await readDataBaseJson<PlayerModel[]>(this.dataBasePath);

        return data;
    }


    async getById(id: number): Promise<PlayerModel | undefined> {

        //let data: PlayerModel | undefined = playersDataBase.find(player => player.id === id);
        const dataBase: PlayerModel[] = await this.getAll();

        const data: PlayerModel | undefined = dataBase.find(player => player.id === id);

        return data;
    }


    async insert(playerData: PlayerModel): Promise<number> {

        //playersDataBase.push(playerData);

        const dataBase: PlayerModel[] = await this.getAll();

        dataBase.push(playerData);

        await writeDataBaseJson(this.dataBasePath, dataBase);

        return playerData.id;
    }


    async delete(playerId: number): Promise<{ id: number, name: string } | null> {

        //const index = playersDataBase.findIndex(p => p.id === playerId);
        const dataBase: PlayerModel[] = await this.getAll();

        const index = dataBase.findIndex(player => player.id === playerId);

        if (index === -1) {
            return null;
        }

        const data: { id: number, name: string } = dataBase[index];

        dataBase.splice(index, 1);

        await writeDataBaseJson(this.dataBasePath, dataBase);

        return data;
    }


    async findAndUpdate(playerId: number, statisticsData: StatiscsModel): Promise<PlayerModel | null> {

        //const index = playersDataBase.findIndex(p => p.id === playerId);
        const dataBase: PlayerModel[] = await this.getAll();

        const index = dataBase.findIndex(player => player.id === playerId);

        if (index === -1) {
            return null;
        }

        dataBase[index].statistics = statisticsData;

        await writeDataBaseJson(this.dataBasePath, dataBase);

        return dataBase[index];
    }

}

export const playersRepository = new PlayersRepository(String(process.env.PLAYERS_DATABASE_PATH));