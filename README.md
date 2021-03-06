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

## Segundo dia - Criando backend

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
## Terceiro dia - Criando front-end

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


### Problemas com NPM
Se tiver problemas ao instalar os pacotes, trocar o diretório do cache NPM:
```
npm config set cache C:\nodejs\npm-cache --global 
```

## Quarto dia - Criando  o app mobile
 - Instalar expo
 - criar projeto react native
 - executar
   - no celular
   - emuladores
   - expo snack
 - diferenças para o reactJS
   - elementos html: View, Text
   - não tem semântica
   - estilização sem id, precisa criar um estilo através de StyleSheet
     - flexbox: todos os componentes têm display flex por padrão
     - propriedades: propriedades sem hifen, deve usar CamelCase
     - não há herança de estilos, deve aplicar a todos os componentes
     - estilização própria por elemento
   - estrutura de pastas:
     - /assets: logo e splash screen
   - ícone e splash screen
   - configurando navegação
   - página de casos / incidents
   - detalhe do caso
   - abrindo whatsapp e email
   - conexão com api
   - enviando projeto ao github

### Instalar emulador Android

- Baixar android studio  - [aqui](https://developer.android.com/studio?gclid=Cj0KCQjwmpb0BRCBARIsAG7y4zZHqIVGgISqPO1zr9Uy8Z5ArgaAN1VckS1w1oB3EaSR0uN-BSwRAosaAoByEALw_wcB&gclsrc=aw.ds)
- Configure - SDK manager
- SDK plataform - Android 9.0
- SDK Tools - marcar o Android SDK build-tools, Android emulator, Android SDK plataform-tools, Android SDK-tools e Intel x86 emulator accelerator.
- Configure - AVD manager
- Criar emulador, escolher pixel 2
- Baixar imagem do android Pie

OBS: Caso o android studio não consiga instalar o HAXM, baixar manual em [https://github.com/intel/haxm/releases/tag/v7.5.6](https://github.com/intel/haxm/releases/tag/v7.5.6)

### Expo
 - Instalar (demora)
```
npm install -g expo-cli
```
 - No windows, é necessário adicionar o caminho até o script expo no PATH. Vá em variáveis de ambiente, adicione o caminho ```%USER%\AppData\Roaming\npm``` ao PATH e reinicie o VS
 - Iniciar o projeto (demora), escolha a opção *blank*
```
> expo init mobile
```
 - Instalar react navigation
```
> cd mobile

> npm install @react-navigation/native

> expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
```
 - Instalar react navigation stack e dependências
```
> npm install @react-navigation/stack

> expo install react-native-safe-area-context

> expo install react-native-gesture-handler

> expo install @react-native-community/masked-view

> expo install react-native-screens
```
 - Constantes para usar no Expo:
```
> expo install expo-constants
```
 - Para iniciar a escrita de um e-mail no expo:
 ```
> expo install expo-mail-composer
```
- Link com backend 
```
> npm install axios
```
- Pacote com definições de idioma:
```
> npm install intl
```

## Quinto dia - Funcionalidades avançadas

 - Adicionando validação
 - Adicionando testes
   - Por que?
   - TDD
   - Configurando Jest
   - Tipos de testes: unitário e integração
   - Configurando banco de testes
   - Instalando supertest
   - Testando rota de autenticação
 - Deploy
   - Alternativas
   - Qual escolher?

### Validação no backend
Celebrate, que usa a lib joi para uso com Express.
```
> npm install celebrate
```

### Teste unitário com Jest
 - Instalar JestJS:
```
> npm install jest --save-dev
> npx jest --init
    (use jest when running test = yes)
    (the test env used for testing = node)
    (add coverage tests = no)
    (clear mock calls automatically between every test = yes)
```
 - Para usar base de dados de teste, é necessário criar uma base com configuração diferente. Para carregar bases diferentes de acordo com o ambiente:
```
> npm install cross-env
```
   - adicionar ao início do script test a definição da variável, ficando assim: ```"test": "cross-env NODE_ENV=test jest"```
   - no código acessar a variável de ambiente: ```const env = process.env.NODE_ENV```

### Teste de integração com Supertest
 - Instalar supertest:
```
> npm install supertest --save-dev
```