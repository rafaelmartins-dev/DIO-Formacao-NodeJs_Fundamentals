import { Router } from 'express';
import { clubsController } from './clubs.controller';


export const clubsRouter = Router();

clubsRouter.get('/all', clubsController.getAll);
clubsRouter.get('/:id', clubsController.getById);