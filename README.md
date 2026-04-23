# AP Koukan

API REST em desenvolvimento para gerenciamento de apresentacoes musicais, usuarios, artistas e instrumentos. O projeto foi construido com NestJS, TypeORM e MySQL, com autenticacao baseada em JWT para proteger as rotas principais da aplicacao.

## Status do projeto

Este projeto esta em ambiente de desenvolvimento.

No estado atual, a aplicacao ja possui:

- estrutura modular com NestJS
- CRUDs para `usuario`, `artista`, `instrumento` e `apresentacao`
- relacionamento entre usuario e apresentacoes
- relacionamento entre apresentacoes, artistas e instrumentos por entidades de juncao
- autenticacao com `passport-local` e `passport-jwt`
- criptografia de senha com `bcrypt`
- collection Postman para testes manuais

Ainda existem pontos que devem evoluir antes de um uso em producao, como configuracao por variaveis de ambiente, padronizacao dos DTOs, ampliacao dos testes e revisao de seguranca.

## Objetivo

O AP Koukan organiza o cadastro e a consulta de informacoes relacionadas a apresentacoes musicais, permitindo:

- cadastrar usuarios responsaveis pelas apresentacoes
- cadastrar artistas
- cadastrar instrumentos
- registrar apresentacoes vinculando usuario, artistas e instrumentos
- autenticar usuarios para acesso as rotas protegidas

## Stack utilizada

- Node.js
- TypeScript
- NestJS
- TypeORM
- MySQL
- Passport
- JWT
- Bcrypt
- Jest

## Arquitetura

O projeto segue uma organizacao modular baseada em recursos:

- `src/usuario`: regras de usuarios
- `src/auth`: autenticacao, guards, strategies e criptografia
- `src/artista`: cadastro e consulta de artistas
- `src/instrumento`: cadastro e consulta de instrumentos
- `src/apresentacao`: cadastro e consulta de apresentacoes
- `src/dto`: objetos de transferencia de dados
- `src/tocador`: classe base compartilhada por artista e instrumento

## Modelagem de dominio

### Usuario

Representa o usuario da aplicacao.

Campos principais:

- `id`
- `nome`
- `email`
- `senha`
- `foto`

Relacionamentos:

- `1:N` com `Apresentacao`

### Artista

Representa um participante artistico da apresentacao.

Campos herdados de `Tocador`:

- `id`
- `nome`
- `posicao`

Relacionamentos:

- `1:N` com `ApresentacaoArtista`

### Instrumento

Representa um instrumento utilizado em uma apresentacao.

Campos herdados de `Tocador`:

- `id`
- `nome`
- `posicao`

Relacionamentos:

- `1:N` com `ApresentacaoInstrumento`

### Apresentacao

Representa uma musica ou apresentacao cadastrada no sistema.

Campos principais:

- `id`
- `musica`

Relacionamentos:

- `N:1` com `Usuario`
- `1:N` com `ApresentacaoArtista`
- `1:N` com `ApresentacaoInstrumento`

### Entidades de juncao

O projeto utiliza entidades explicitas de associacao:

- `ApresentacaoArtista`
- `ApresentacaoInstrumento`

Esse modelo deixa a relacao mais flexivel para futuras evolucoes, como adicao de metadados por participacao.

## Autenticacao e autorizacao

A autenticacao foi implementada com:

- `passport-local` para login
- `passport-jwt` para validacao de token
- `@nestjs/jwt` para emissao do token
- `bcrypt` para criptografia e validacao de senha

### Fluxo atual

1. o usuario realiza cadastro
2. a senha e armazenada de forma criptografada
3. o login e feito pela rota `/usuarios/logar`
4. a API retorna um token JWT no formato Bearer
5. as rotas protegidas exigem o header `Authorization: Bearer <token>`

## Rotas principais

### Autenticacao

- `POST /usuarios/logar`

Exemplo de body:

```json
{
  "usuario": "maria@email.com",
  "senha": "12345678"
}
```

### Usuario

- `POST /usuario/cadastrar`
- `GET /usuario/all`
- `GET /usuario/:id`
- `GET /usuario/nome/:nome`
- `PUT /usuario`

Observacao:

- `POST /usuario/cadastrar` e publica
- as demais rotas de usuario estao protegidas por JWT

### Artista

- `GET /artista`
- `GET /artista/:id`
- `GET /artista/nome/:nome`
- `POST /artista`
- `PUT /artista`
- `DELETE /artista/:id`

Todas as rotas de artista exigem autenticacao.

### Instrumento

- `GET /instrumento`
- `GET /instrumento/:id`
- `GET /instrumento/nome/:nome`
- `POST /instrumento`
- `PUT /instrumento`
- `DELETE /instrumento/:id`

Todas as rotas de instrumento exigem autenticacao.

### Apresentacao

- `GET /apresentacao`
- `GET /apresentacao/:id`
- `GET /apresentacao/nome/:nome`
- `POST /apresentacao`
- `PUT /apresentacao`
- `DELETE /apresentacao/:id`

Todas as rotas de apresentacao exigem autenticacao.

## Exemplo de criacao de apresentacao

```json
{
  "userId": 1,
  "musica": "Shallow",
  "artistasIds": [1, 2],
  "instrumentosIds": [1, 3]
}
```

## Requisitos

Antes de executar o projeto localmente, garanta que voce tenha instalado:

- Node.js 18+ ou superior
- npm
- MySQL Server

## Configuracao atual do banco

No estado atual, a conexao com o banco esta definida diretamente em `src/app.module.ts`.

Configuracao usada hoje:

```ts
host: 'localhost'
port: 3306
username: 'root'
password: 'root'
database: 'db_apkoukan'
```

O TypeORM esta com:

```ts
synchronize: true
```

Observacao importante:

- essa configuracao e conveniente para desenvolvimento
- nao e recomendada para producao
- o ideal e migrar para variaveis de ambiente e migrations

## Como executar o projeto

### 1. Instalar dependencias

```bash
npm install
```

### 2. Criar o banco de dados

Crie no MySQL o banco:

```sql
CREATE DATABASE db_apkoukan;
```

### 3. Iniciar a aplicacao

```bash
npm run start:dev
```

A API sobe, por padrao, em:

```text
http://localhost:4000
```

Observacao:

- o `main.ts` utiliza a porta `4000` quando a variavel `PORT` nao esta definida

## Scripts disponiveis

```bash
npm run start
npm run start:dev
npm run start:debug
npm run build
npm run lint
npm run test
npm run test:watch
npm run test:cov
npm run test:e2e
```

## Testes

O projeto possui a estrutura inicial de testes configurada com Jest e um teste e2e padrao do NestJS no diretorio `test/`.

Neste momento:

- a base de testes automatizados ainda e inicial
- o fluxo principal de validacao pratica pode ser feito pela collection do Postman

## Collection Postman

Existe uma collection pronta para testes manuais em:

- [postman/ap-koukan.postman_collection.json](/c:/Users/akann/Desktop/Codes/projetos%20pessoais/ap-koukan/postman/ap-koukan.postman_collection.json)

Ela inclui:

- login
- cadastro e consulta de usuarios
- CRUD de artistas
- CRUD de instrumentos
- CRUD de apresentacoes
- captura automatica de token JWT e IDs principais

Como o projeto roda na porta `4000`, ajuste a variavel `baseUrl` da collection para:

```text
http://localhost:4000
```

## Estrutura de pastas

```text
src/
  apresentacao/
  artista/
  auth/
  dto/
  instrumento/
  tocador/
  usuario/
  app.module.ts
  main.ts
test/
postman/
```

## Pontos de atencao do estado atual

Como o projeto ainda esta em desenvolvimento, vale considerar os seguintes pontos:

- credenciais do banco e segredo JWT ainda estao no codigo-fonte
- `synchronize: true` esta habilitado
- a documentacao OpenAPI/Swagger ainda nao foi adicionada
- parte dos DTOs e entidades ainda precisa ser melhor alinhada
- a cobertura de testes ainda precisa crescer
- ha mensagens de erro e detalhes de retorno que podem ser padronizados

## Proximos passos sugeridos

- mover configuracoes sensiveis para variaveis de ambiente
- adicionar `@nestjs/config`
- criar migrations com TypeORM
- incluir Swagger para documentacao automatica
- criar testes unitarios e e2e para os modulos principais
- padronizar respostas e tratamento global de erros
- revisar naming e consistencia entre entidades, DTOs e payloads

