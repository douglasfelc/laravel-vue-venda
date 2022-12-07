# About Vendas API

Welcome to the Vendas API development repository!

* [Getting Started](#getting-started)
* [Credentials](#credentials)
* [Endpoints documentation](https://github.com/douglasfelc/laravel-vue-venda/blob/main/backend/README-ENDPOINTS.md)

## Getting Started

Vendas API is the REST API responsible for the Vendas backend, sale platform, developed with the PHP Laravel framework, Eloquent ORM, MySQL database.

A local development environment is available to quickly get up and running. You will need a basic understanding of how to use the command line on your computer. This will allow you to set up the local development environment, to start it and stop it when necessary, and to run the tests.

You will also need Docker installed and running on your computer. Docker is the virtualization software that powers the local development environment. Docker can be installed just like any other regular application.

### Development Environment Commands

Ensure [Docker](https://www.docker.com/products/docker-desktop) is running before using these commands.

#### To start the development environment for the first time

Clone the current repository using:

```
git clone https://github.com/douglasfelc/laravel-vue-venda.git
```

Then in your terminal move to the repository folder `cd laravel-vue-venda`.

After that, first access the API folder `cd api` and run the following commands:

Configure your environment variables file.

On Linux and Mac:

```
cp .env.example .env
```

On Windows:

```
copy .env.example .env
```

#### To build and start using [Docker Compose](https://docs.docker.com/compose/reference/) and [Sail](https://laravel.com/docs/8.x/sail)

```
./vendor/bin/sail up -d
```

Access the container by running the command:

```
docker exec -it backend-laravel.test-1 bash
```

When accessing the container, generate your application encryption key using:

```
php artisan key:generate
```

Generate the jwt secret using:

```
php artisan jwt:secret
```

Install the dependencies by running the command:

```
composer install
```

And perform the migrations by running the command:

```
php artisan migrate
```

Still inside the container, you can consult the list of routes using the command:

```
php artisan route:list
```

The Vendas API will be accessible at http://localhost:8000/.

To stop Docker containers, run the command:

```
./vendor/bin/sail down
```

## Credentials

To see all environment variables, access the .env file in the root of the API project. These are the default environment credentials of Vendas API:

* API port: `8000`
* Database connection: `mysql`
* Database Host: `mysql`
* Database Port: `3306`
* Database Name: `venda`
* Database Username: `sail`
* Database Password: `password`
