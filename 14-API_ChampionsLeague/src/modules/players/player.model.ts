
export interface PlayerModel {
    id: number;
    name: string;
    nacionality: string;
    clubId: number;
    position: string;
    statistics: {
        overall: number;
        pace: number;
        shooting: number;
        passing: number;
        dribbling: number;
        defending: number;
        physical: number;
    }
}