import { Request, Response } from 'express';


export const appMessage = (req: Request, res: Response) => {
    res.status(200).send({
        message: 'Bem-vindo(a) à API da Champions League! Serviço de jogadores e clubes com Node.js e Express.'
    });
}
