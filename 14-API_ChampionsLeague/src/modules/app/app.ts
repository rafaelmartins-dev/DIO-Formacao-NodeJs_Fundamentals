import express from 'express';
import { router } from '@/modules/app/app.router';
import cors from 'cors';


export function createApp() {

    const app = express();

    app.use(cors({
        origin: '*'
    }))

    app.use(express.json());

    app.use(router);

    return app;

}



