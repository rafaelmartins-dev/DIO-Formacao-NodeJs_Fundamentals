import { createApp } from '@/modules/app/app';


const port: number = Number(process.env.PORT) || 3000;

const server = createApp();


server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
