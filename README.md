# Semana Omnistack 11 - Be The Hero

## Primeiro dia

1. Apresentar aplicação
1. Configurar ambiente de desenvolvimento
   - Node.js & NPM
   - Visual Studio Code
1. Entender sobre backend and frontend
1. Criar projeto com nodeJS
1. Entender sobre React & Single Page Apps
1. Criar projeto com ReactJS
1. Entender sobre React Native & Expo


### Criar projeto frontend React no Windows 10
Ao invés de ``npx create-react-app frontend``, como o nome do usuário contem espaços, será necessário executar de outra forma:
```
> npm install -g create-react-app

> Set-ExecutionPolicy -ExecutionPolicy RemoteSigned

> create-react-app frontend
```

## Segundo dia

1. NodeJS & Express
   - Rotas e recursos
   - Métodos HTTP
   - Tipos de parâmetros
1. Configurando nodemon
1. Utilizando Insomnia
1. Diferenças entre bancos de dados
1. Configurando banco de dados
1. Pensando nas entidades e funcionalidades
1. Construção do backend
1. Adicionando módulo CORS
1. Enviando backend ao github

### Para acessar base de dados através de query builder
Instalar knexJs e sqlite
```
> npm install knex

> npm install sqlite3
```
Inicializar a configuração:
```
> npx knex init
Created ./knexfile.js
```

### Criar migration
```
> npx knex migrate:make nome-migration
Using environment: development
Created Migration: ...

> npx knex migrate:latest
Using environment: development
Batch 2 run: 1 migrations

```
## Terceiro dia

1. Limpando a estrutura
1. Conceitos do React
   - Componente
   - JSX
   - Propriedades
   - Estado
   - Imutabilidade
1. Página de login
1. Configurando rotas
1. Cadastro de ONGs
1. Listagem de Incidents
1. Cadastro de um novo incident
1. Conectando aplicação à API
1. Enviar projeto ao Github

### App Be The Hero

Entidades:
 - ONG -> NGO
 - Caso -> Incident

Funcionalidades:
 - Login de ONG
 - Logout de ONG
 - Cadastro de ONG
 - Cadastrar incident
 - Excluir incident
 - Listar incidents de uma ONG
 - Listar todos os incidents
 - Entrar em contato com a ONG (por whatsapp ou email)
