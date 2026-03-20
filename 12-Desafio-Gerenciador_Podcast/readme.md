# Gerenciador de Podcast (Node.js + TypeScript)

API HTTP simples para listar e filtrar episodios de podcast a partir de um arquivo JSON local.

## Sobre o projeto

Este projeto foi construido com Node.js nativo (modulo `node:http`) e TypeScript, sem framework web.

Atualmente a API permite:

- Exibir uma rota inicial de boas-vindas.
- Listar todos os episodios.
- Filtrar episodios por nome do podcast.

## Tecnologias

- Node.js
- TypeScript
- tsx (hot reload no ambiente de desenvolvimento)

## Estrutura principal

```text
src/
	controllers/   # camada que recebe req/res
	services/      # regras de negocio
	repositories/  # acesso ao JSON de episodios
	models/        # contratos de dados (interfaces)
	routes/        # declaracao de rotas
	utils/         # enums e utilitarios (metodos/status)
	appRouter.ts   # roteamento principal
	server.ts      # bootstrap do servidor HTTP
```

## Pre-requisitos

- Node.js 20+
- npm

## Instalacao

```bash
npm install
```

## Configuracao

Crie um arquivo `.env` na raiz do projeto com a porta da API:

```env
PORT=8000
```

## Scripts

- `npm run dev`: inicia em modo desenvolvimento com recarga automatica.
- `npm run build`: compila TypeScript para a pasta `dist`.
- `npm run start`: executa a versao compilada em `dist/server.js`.

## Executando o projeto

Modo desenvolvimento:

```bash
npm run dev
```

Build e execucao em producao local:

```bash
npm run build
npm run start
```

## Endpoints

Base URL local (exemplo):

```text
http://localhost:8000
```

### 1) Home

- Metodo: `GET`
- Rota: `/`

Resposta esperada:

```json
{
	"message": "Gerenciador de Podcasts !!"
}
```

### 2) Listar episodios

- Metodo: `GET`
- Rota: `/episodes`

Resposta (contrato da API):

```json
{
	"statusCode": 200,
	"body": [
		{
			"podcastName": "Flow Podcast",
			"episode": "CBUM - Flow #319",
			"videoId": "pQSuQmUfS30",
			"cover": "https://i.ytimg.com/vi/pQSuQmUfS30/maxresdefault.jpg",
			"link": "https://www.youtube.com/watch?v=pQSuQmUfS30",
			"category": ["saude", "bodybuilder"]
		}
	]
}
```

### 3) Filtrar episodios por nome do podcast

- Metodo: `GET`
- Rota: `/episode`
- Query param: `p`

Exemplo:

```text
GET /episode?p=Flow%20Podcast
```

Observacoes:

- O filtro faz comparacao exata por nome do podcast.
- A comparacao ignora maiusculas/minusculas.

## Exemplos com curl

```bash
# Home
curl http://localhost:3333/

# Lista completa
curl http://localhost:3333/episodes

# Filtro por podcast
curl "http://localhost:3333/episode?p=Flow%20Podcast"
```

## Codigos de status

- `200 OK`: quando ha resultado.
- `204 No Content`: quando a busca nao encontra episodios.

## Fonte dos dados

Os episodios estao em:

- `src/repositories/episodes.json`

## Melhorias futuras

- Filtro por categoria.
- Paginacao.
- Validacao de query params.
- Persistencia em banco de dados.
