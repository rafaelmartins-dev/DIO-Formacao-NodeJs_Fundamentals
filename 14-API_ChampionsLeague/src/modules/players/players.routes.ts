import { Router } from 'express';
import { playersController } from '@/modules/players/players.controller';


export const playersRouter = Router();

playersRouter.get('/all', playersController.getAll);
playersRouter.get('/:id', playersController.getById);

playersRouter.post('', playersController.create);

playersRouter.delete('/:id', playersController.delete);

playersRouter.patch('/:id', playersController.update);