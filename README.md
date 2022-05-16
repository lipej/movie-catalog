# Movie Catalog

Esse projeto full stack implementa uma aplicação para cadastro e ativação de usuários.

## Authors

- [@lipejose](https://www.github.com/lipejose)

## Tech Stack

**Client:** Next.JS, TailwindCSS, React Hook Forms, DaisyUI

**Server:** Node, Fastify, Prisma, MySQL

**project\*** pnpm, turbo repo, typescript

## Rodando o projeto

Clone o projeto

```bash
  git clone https://github.com/lipejose/my-test
```

Entre no diretorio do projeto

```bash
  cd my-test
```

Instale as dependencias
Para instalar esse projeto você precisa utilizar o pnpm, caso não tenha instalado é só rodar npm i -g pnpm após isso, rode:

```bash
  pnpm i
```

entre na pasta da api e rode as migrations do prisma

```bash
cd apps/api
pnpx prisma migrate dev
```

rode o seed

```bash
pnpm seed
```

rode todos o projeto

```bash
pnpm dev
```

Pronto, todos os serviços devem estar Rodando

FRONT -> PORTA -> 3000

BACK -> PORTA -> 4001

## Testes

Para rodar os testes digite no terminal:

```bash
  pnpm run test
```

## Váriaveis de ambiente

Para rodar esse projeto crie um arquivo .env com as seguintes váriaveis configuradas

`DATABASE_URL` url da conexão com banco de dados mysql

`JWT_SECRET` segredo para gerar tokens jwt

`CRYPT_SECRET` segredo para criptografar senhas e criar hash

`SENDGRID_KEY` chave do sendgrid

`SENDGRID_FROM` email cadastrado na conta do sendgrid para envio de emails

`FRONT_URL`url de front para envio correto dos emails

`NODE_ENV` ambiente do node = production/development

`RUNNING_ENV` ambiente em que o serviço está rodando ex: production/staging

`SENTRY_DSN` ambiente em que o serviço está rodando

## API Reference

#### Post user

```http
  POST /user
```

| Parameter  | Type     | Description                   |
| :--------- | :------- | :---------------------------- |
| `name`     | `string` | **Required**. Nome completo   |
| `password` | `string` | **Required**. Senha de acesso |
| `email`    | `string` | **Required**. Email           |

#### Login user

```http
  POST /login
```

| Parameter  | Type     | Description                   |
| :--------- | :------- | :---------------------------- |
| `email` | `string` | **Required**. Nome de usuário |
| `password` | `string` | **Required**. Senha de acesso |

#### Active user

```http
  POST /active
```

| Parameter | Type     | Description                            |
| :-------- | :------- | :------------------------------------- |
| `email`   | `string` | **Required**. email de usuário         |
| `hash`    | `string` | **Required**. hash para ativar usuário |

#### MoviesTv

```http
  POST /movies
```

require token bearer

| Parameter | Type     | Description                            |
| :-------- | :------- | :------------------------------------- |
| `movies`  | `MovieTv` |  filmes cadastrados         |
| `tvshows` | `MovieTv` |  séries cadastradas  |

#### MovieTv

```http
  POST /movie&id=:id
```

require token bearer

Retorna um filme pelo id


#### Type MovieTv

```typescript
type MovieTv = {
  id: string;
  poster: string;
  title: string;
  originalTitle: string;
  year: string;
  duration: string;
  tags: string[];
  resume: string;
  cast: string[];
  director: string;
  rating: string[];
  awards: string[];
  type: "MOVIE" | "TVSHOW";
};

```