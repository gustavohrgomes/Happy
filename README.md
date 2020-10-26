<h3 align="center">
  <img src="https://github.com/gustavohrgomes/Happy/blob/main/.github/images/Happy.svg" alt="Happy">
</h3>

<p align="center">
  <a href="https://rocketseat.com.br">
    <img alt="Made by Rocketseat" src="https://img.shields.io/badge/made%20by-Rocketseat-7519C1">
  </a>
</p>

## :pushpin: Índice

- Sobre
- Tecnologias Utilizadas
- Web Screenshots
- Como rodar o projeto

## :bookmark: Sobre

Não é novidade para ninguém que diversas pessoas visitam as casas de acolhimento institucional de suas cidades, afim de brincar, levar brinquedos, proporcionar algo que traga um sentimento de felicidade para aquelas crinças. 

E foi pensando nisso que o **Happy** foi criado. Afim de facilitar a vida dessas pessoas, o Happy é uma aplicação que conecta pessoas à casas de acolhimento institucional para fazer o dia de muitas crianças mais feliz :purple_heart:

Essa aplicação foi desenvolvida durante o evento **Next Level Week**, oferecido pela [Rocketseat](https://www.rocketseat.com.br).

## :rocket: Tecnologias Utilizadas

Essas são as tecnologias que foram utilizadas até o momento.

### Ambiente de desenvolvimento

  - [VSCode](https://code.visualstudio.com/)
  - [Yarn](https://classic.yarnpkg.com/)

### Front-End

  - [React](https://reactjs.org/)
  - [Typescript](https://www.typescriptlang.org/)
  - [Expo](https://expo.io/)
  - [Leaflet](https://react-leaflet.js.org/)
  - [Mapbox](https://www.mapbox.com/)

### Back-End

  - [NodeJS](https://nodejs.org/en/)
  - [Express](https://expressjs.com/pt-br/)
  - [Typescript](https://classic.yarnpkg.com/)
  - [TypeORM](https://typeorm.io)
  - [SQLite](https://www.sqlite.org/index.html)

## :computer: Web Screenshots

<div width="" style="display: flex; align-items: 'center'; justify-content: space-evenly">
  <img src="https://github.com/gustavohrgomes/Happy/blob/main/.github/images/landing.png" width="400px">
  <img src="https://github.com/gustavohrgomes/Happy/blob/main/.github/images/map.png"  width="400px">
</div>

<div width="" style="display: flex; align-items: 'center'; justify-content: space-evenly">
  <img src="https://github.com/gustavohrgomes/Happy/blob/main/.github/images/landing.png" width="400px">
  <img src="https://github.com/gustavohrgomes/Happy/blob/main/.github/images/map.png"  width="400px">
</div>

## :construction_worker: Como rodar o projeto

```bash
# Clone Repository
$ git clone https://github.com/gustavohrgomes/Happy.git
```

### 📩 Executando a API

```bash
# Navegue até a pasta bakend
$ cd Happy/backend

# Instale as dependências
$ yarn install

# Execute as migrations
$ yarn typeorm migration:run

# Execute a aplicação
$ yarn dev
```
Para testar a api, clique no botão abaixo:

[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=happy%20api&uri=https%3A%2F%2Fraw.githubusercontent.com%2Fgustavohrgomes%2FHappy%2Fmain%2F.github%2Finsomnia%2Fhappy-api.json)

### 💻 Executando o projeto Web

```bash
# Navegue até a pasta web
$ cd Happy/web

# Instale as dependências
$ yarn install

# Execute a aplicação
$ yarn start
```
Navegue http://localhost:3000/ no seu navegador para ver os resultados.

### 📱 Executando o projeto mobile

```bash
# Navegue até a pasta web
$ cd Happy/mobile

# Instale as dependências
$ yarn install

# Execute a aplicação
$ expo start
```
Escaneie o QR Code gerado pelo expo com o seu smartphone ou abra junto de um emulador

**OBS: Mude o IP do arquivo `services/api.tsx` para o IP gerado pelo expo, caso contrário a aplicação não funcionará**