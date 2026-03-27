# API Champions League

API REST em Node.js + Express para gerenciamento de clubes e jogadores.

## Visao geral

A aplicacao expoe endpoints para:
- consultar clubes
- consultar jogadores
- criar jogador
- atualizar estatisticas de jogador
- remover jogador

Os dados sao persistidos em arquivos JSON locais.

## Tecnologias

- Node.js
- TypeScript
- Express
- CORS
- tsx (execucao em desenvolvimento)

## Estrutura principal

- `src/server.ts`: sobe o servidor HTTP
- `src/modules/app`: configuracao base da app e roteamento
- `src/modules/clubs`: modulo de clubes (controller, service, repository)
- `src/modules/players`: modulo de jogadores (controller, service, repository)
- `src/data/*.json`: base de dados local em JSON

## Padrao de resposta

A API segue o formato:

```json
{
  "status": 200,
  "message": "Texto da operacao",
  "data": {}
}
```

## Rotas

### Rota inicial

- `GET /`
  - Retorna mensagem de boas-vindas da API.

### Clubs

- `GET /api/clubs/all`
  - Lista todos os clubes.

- `GET /api/clubs/:id`
  - Retorna um clube por ID.

### Players

- `GET /api/players/all`
  - Lista todos os jogadores.

- `GET /api/players/:id`
  - Retorna um jogador por ID.

- `POST /api/players`
  - Cria um jogador.

- `PATCH /api/players/:id`
  - Atualiza apenas o objeto `statistics` do jogador.

- `DELETE /api/players/:id`
  - Remove um jogador por ID.

## Exemplo de body para criar jogador

```json
{
  "id": 99,
  "name": "Nome do Jogador",
  "nacionality": "Brazil",
  "clubId": 1,
  "position": "ST",
  "statistics": {
    "overall": 85,
    "pace": 84,
    "shooting": 86,
    "passing": 78,
    "dribbling": 82,
    "defending": 40,
    "physical": 79
  }
}
```

## Exemplo de body para atualizar estatisticas

```json
{
  "overall": 88,
  "pace": 86,
  "shooting": 89,
  "passing": 80,
  "dribbling": 84,
  "defending": 42,
  "physical": 81
}
```

## Como executar

1. Instale as dependencias:

```bash
npm install
```

2. Rode em desenvolvimento:

```bash
npm run dev
```

A API inicia em `http://localhost:3000` (ou valor definido em `PORT` no arquivo `.env`).

## Variaveis de ambiente

Arquivo `.env` esperado:

```env
PORT=3000
CLUBS_DATABASE_PATH="./src/data/clubs.dataBase.json"
PLAYERS_DATABASE_PATH="./src/data/players.dataBase.json"
```

## Scripts

- `npm run dev`: inicia em modo desenvolvimento com watch
- `npm start`: executa build compilada em `dist/server.js`

> Observacao: para usar `npm start`, compile antes com TypeScript (ex.: `npx tsc`).
