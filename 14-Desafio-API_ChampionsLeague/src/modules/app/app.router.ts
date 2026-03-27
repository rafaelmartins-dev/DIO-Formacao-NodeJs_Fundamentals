import { Router } from "express";
import { playersRouter } from "@/modules/players/players.routes";
import { appMessage } from "@/modules/app/app.controller";
import { clubsRouter } from "../clubs/clubs.routes";

export const router = Router();

router.get('/', appMessage);

router.use('/api/players', playersRouter);

router.use('/api/clubs', clubsRouter);
