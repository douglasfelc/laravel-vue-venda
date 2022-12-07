# About Vendas App

Welcome to the Vendas App development repository!

* [Getting Started](#getting-started)
* [Credentials](#credentials)

## Getting Started

Vendas App is the front-end, communicating with the `api` and rendering the information for the user, developed with JavaScript framework Vue.js. In this way, for the web application to work correctly, the API must be running.

A local development environment is available to quickly get up and running. You will need a basic understanding of how to use the command line on your computer. This will allow you to set up the local development environment, to start it and stop it when necessary, and to run the tests.

You will also need NPM installed and running on your computer. NPM is a package manager for Node.JS.

#### To start the development environment for the first time

Clone the current repository using:

```
git clone https://github.com/douglasfelc/laravel-vue-venda.git
```

Then in your terminal move to the repository folder `cd laravel-vue-venda`.

After that, first access the App folder `cd frontend` and run the following commands:

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

The Vendas APP will be accessible at http://localhost:8080/.

## Credentials

To see all environment variables, access the .env file in the root of the App project. These are the default environment credentials of Vendas App:

* APP port: `8080`
* API port: `8000`
