import { fastify } from 'fastify';
import { teamsF1 } from '@/data/teamsF1';
import { driversF1 } from '@/data/drivers';
import cors from '@fastify/cors';

const server = fastify();

server.register(cors, {
    origin: '*', // Permitir todas as origens (ajuste conforme necessário)  
});


server.get("/teams", async (request, reply) => {
    reply.type('application/json').code(200);
    reply.send(teamsF1);
});


server.get("/drivers", async (request, reply) => {
    reply.type('application/json').code(200);
    reply.send(driversF1);
});


server.get("/drivers/:id", async (request, reply) => {

    // id é uma string por padrão
    const { id } = request.params as { id: string };

    // Convertendo id para número e buscando o piloto correspondente
    const driver = driversF1.find(d => d.id === Number(id));

    if (!driver) {
        reply.type('application/json').code(404);
        reply.send({ message: "Driver not found" });
        return;
    }

    reply.type('application/json').code(200);
    reply.send(driver);
});


server.listen({ port: 3000 }, () => {
    console.log(`Server is running on port 3000`);
});