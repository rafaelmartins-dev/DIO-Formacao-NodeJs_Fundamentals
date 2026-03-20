
import * as http from 'node:http';
import { appRouter } from './appRouter';


//criando um servidor HTTP simples que responde com uma mensagem JSON
const server = http.createServer(appRouter);


// iniciando o servidor na porta definida no arquivo .env
server.listen(process.env.PORT, () => {
    console.log(`Server running on http://localhost:${process.env.PORT}`);
});