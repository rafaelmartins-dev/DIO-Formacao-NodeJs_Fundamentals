# Podcast Manager

## Domínio

Podcasts feitos em vídeo

## Descrição

App estilo Netflix, onde seja possível centralizar diferentes episódios de podcasts separados por categorias.

## Features

- Listar os podcasts em sessões de categorias  
    - [saúde, fitness, mentalidade, humor...]
- Filtrar episódios por nome de podcasts
- Filtrar episódios por categoria

## COMO

### Feature: Listar podcasts em sessões de categorias

Retornar uma API REST (JSON) com os seguintes dados:
- nome do podcast
- nome do episódio
- id do vídeo
- imagem de capa
- link
- categorias

```ts
[
    {
        podcastName: "Flow Podcast",
        episode: "CBUM - Flow #319",
        videoId: "pQSuQmUfS30",
        cover: "https://i.ytimg.com/vi/pQSuQmUfS30/maxresdefault.jpg",
        link: "https://www.youtube.com/watch?v=pQSuQmUfS30",
        category: ["saúde", "bodybuilder"]
    },
    {
        podcastName: "Flow Podcast",
        episode: "JOÃO AMOEDO - Flow Podcast #462",
        videoId: "FgqKjlfNEAE",
        cover: "https://i.ytimg.com/vi/FgqKjlfNEAE/maxresdefault.jpg",
        link: "https://www.youtube.com/watch?v=FgqKjlfNEAE",
        category: ["política"]
    }
]
```

### Feature: Filtrar episódios por nome do podcast

Entrada:

- método: GET
- rota: /episode?p=nome_do_podcast

Saída:

- lista contendo apenas episódios cujo podcastName corresponda ao parâmetro informado
- comparação case-insensitive


## Status atual

- Implementado: rota de boas-vindas
- Implementado: listagem geral de episódios
- Implementado: filtro por nome do podcast

## O que foi feito

1. Estrutura da API organizada em camadas (router, controller, service e repository).
2. Implementação da rota inicial de boas-vindas.
3. Implementação da rota para listagem geral de episódios.
4. Implementação da rota para filtro por nome do podcast.
5. Atualização da documentação principal no README com setup, scripts e endpoints.
6. Ajuste deste documento com contrato de dados corrigido e status do projeto.

## Melhorias futuras

1. Criar service de filtro por categoria, reutilizando o repositório atual.
2. Adicionar nova rota para categoria e conectar no appRouter.
3. Validar query params obrigatórios antes de chamar os services.
4. Definir respostas de erro para parâmetros inválidos (ex.: 400).
5. Incluir testes básicos de fluxo (lista, filtro por nome e filtro por categoria).