import * as http from 'node:http';
import { getEpisodes, getFilterEpisodes, getHome } from './controllers/podcasts-controller';
import { Routes } from './routes/routes';
import { HttpMethods } from './utils/http-methods';


export const appRouter = async (req: http.IncomingMessage, res: http.ServerResponse) => {

    // monta a base da url a partir do host - caso não exista, utiliza localhost:8000
    // Exemplo: cria a base como: http://localhost:8000
    const base = `http://${req.headers.host || 'localhost:8000'}`;

    // cria um objeto URL completo a partir do caminho recebido na requisição e da base
    // OBS: normalmente o req.url vem apenas com a rota, como: "/" ou "/episodes"
    // Exemplos: requisição para "/" -> url = http://localhost:8000/
    //           requisição para "/episodes" -> url = http://localhost:8000/episodes
    const url = new URL(req.url || '/', base);

    //extrai apenas a rota / caminho da url. Exemplo: "/" ou "/episodes"
    const path = url.pathname;

    // extrai apenas o parâmetro da variável "p" da url, caso exista.
    // Como a url não aceita espaços em branco, esse já faz o tratamento automático, 
    // convertendo os espaços em branco para "%20"
    const queryString = url.searchParams.get('p');


    if (req.method === HttpMethods.GET && path === Routes.HOME) {
        await getHome(req, res);
    }

    if (req.method === HttpMethods.GET && path === Routes.LIST) {
        await getEpisodes(req, res);
    }

    if (req.method === HttpMethods.GET && path === Routes.EPISODE) {
        await getFilterEpisodes(req, res, queryString || '');
    }


}