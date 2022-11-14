## Requisitos

- Node > 15
- Npm > 6

# Technical Challange Boltech Front

Este projeto consiste em aplicação fullstack, desenvolvido utilizando tecnologias como NODE JS para backend e React JS para front END.

## Features

- Autenticacao
- Criacao de Projeto
- Criacao de Tarefa para cada projeto
- Vite Introduced ( superfast building )

## Tech Stack

**Client:** React, Vite, Bootstrap 5, Axios

**Server:** Node, Express, NestJS Framework

## Variavel de ambiente

Para rodar este projeto no BACKEND pode utlizar yarn docker:dev ou para yarn docker:prod, caso aconteca algum erro, utiliza os scripts padroes


## Documentação - API SWAGGER

Para ter acesso a documentação dos endpoints desenvolvido você deve acessar o seguinte link
[http://localhost:3000/api](http://localhost:3000/api)

## Executando localmente a API

Navegue ate o diretorio

```bash
  git clone git@github.com:jhonyjss/bolttech-api.git && cd bolttech-api
```

Executar com docker compose

```bash
  npm run docker:dev
```

Executar sem docker compose

```bash
  npm run start:dev
```

## Executando localmente o FRONT END

Navegue ate o diretorio

```bash
  cd frontend
```

Executar com o ambiente desenvolvimento

```bash
  npm run dev
```

Executar o compilamento em prod

```bash
  npm run build && npm run start
```
