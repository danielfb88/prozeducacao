# **Teste para desenvolvedor Back-end - Proz Educação**


Essa API é um teste para seleção na empresa Proz Educação.

O desafio consiste em criar endpoints de CRUD para o gerenciamento de alunos, sendo que em um destes endpoints os dados serão inseridos através de um arquivo XLSX previamente carregado na pasta `resources/xls`.

O projeto segue os princípios SOLID e foi construído sobre o modelo Clean Architecture, utilizando TDD (programação orientada a testes) como metodologia de trabalho e 100% de cobertura de testes unitários com Jest.

![alt text](./public/img/tdd.png)

<br /><br />

> ## Princípios

* Single Responsibility Principle (SRP)
* Open Closed Principle (OCP)
* Liskov Substitution Principle (LSP)
* Interface Segregation Principle (ISP)
* Dependency Inversion Principle (DIP)
* Don't Repeat Yourself (DRY)
* Keep It Simple, Silly (KISS)

> ## Design Patterns

* Factory
* Adapter
* Decorator
* Dependency Injection
* Builder

> ## Metodologias e Designs

* TDD
* Clean Architecture
* DDD
* Conventional Commits
* GitFlow
* Use Cases

> ## Bibliotecas e Ferramentas

* NPM
* Typescript
* Git
* Docker
* Jest
* TypeORM
* Tsyringe
* Winston
* PG (Postgres)
* Node-xlsx
* Express
* Husky
* Lint Staged
* Eslint
* Standard Javascript Style
* Nodemon
* Rimraf
* Module-Alias

> ## Features do Node

* API Rest com Express
* Log de Erro
* CORS
* Middlewares

> ## Features do Typescript

* POO Avançado
* Interface
* TypeAlias
* Configurações

> ## Features de Testes

* Testes Unitários
* Cobertura de Testes
* Mocks
* Stubs
* Spies
* Fakes

## **Configurações iniciais**

Node 12.x

1. Instalação dos pacotes
```
yarn
```

2. Faça uma cópia do arquivo `.env.example` na pasta raiz e o renomeie para `.env`
```
cp .env.example .env
```

3. Execute o docker para iniciar os serviços necessários como banco de dados (Postgres) e cache (Redis)
```
docker-compose up -d
```

4. Após os serviços terem sido inicializados com o Docker, crie um banco de dados chamado `db_test` utilizando o seu db client favorito.

5. Execute a migration do TypeORM para criar as tabelas necessárias na sua instância Docker do banco de dados
```
yarn migration:run
```

5. Execute a aplicação com:
```
yarn start:dev
```

6. Para executar testes unitários:
```
yarn test:ci
```
## **Endpoints**

A collection de requisições para ser importada pelo Postman pode ser encontrada no path `public/postman/Testes.postman_collection.json`