# Vue-SPA-Laravel

## Description

For this project, Laravel is used on the back-end Vuejs is used on the front end as a SPA.

## Instructions

First, clone or download this repository to your machine.
Second, in order to complete the setup, there are two ways. One using Docker and the other without Docker. __I recommend following the first approach, because, I couldn't test the pre-configured dockerized application__.  

**Setup options**
1. Is required to have installed PHP7.*, composer, Nodejs, and MySQL.
2. This project includes a pre-configured dockerized application for PHP, Nodejs, Laravel, MySQL, Nginx [Not tested]

## Setup (Without Docker)

**Clone the repository to your end**

**Copy Laravel environment file**
(While in project root)

```
cp .env.example .env
```

**Add your configuration for the Database**
 *Create a database in MySQL `create database name_database`
```
DB_DATABASE=name_database
DB_USERNAME=root
DB_PASSWORD=root123
```

**Install dependencies and build existing database**

```
composer install
npm install
php artisan key:generate
php artisan migrate
```

```
php artisan migrate
```

**Build app**

###### for development
```
npm run watch
php artisan serve
```

###### for production

```
npm run prod
php artisan serve
```

The application should now be available at http://localhost or http://127.0.0.1:8000/ depending on your configuration.


## Setup (With Docker)

**Docker installation instructions here:**
[https://docs.docker.com/compose/install/](https://docs.docker.com/compose/install/)

**Copy Laravel environment file**
(While in project root)

```
cp .env.example .env
```

**Copy Laradock environment files**

```
cd laradock

cp env-example .env
```

**Run docker containers**

```
docker-compose up -d nginx mysql phpmyadmin redis workspace
```

**Enter workspace container**

```
docker-compose exec --user=laradock workspace bash
```

**Install dependencies and build existing database**

```
composer install
npm install
php artisan key:generate
php artisan migrate
```

**Build app**

```
npm run watch
```

The application should now be available at http://localhost


## Final Notes

__I consider that the most challenging part for me was that every page must be a component. So I learnt Vue Router.__

* I couldn't complete the project because the limited time.
* I used vue-routes for the routing and Laravel to make requests to the server.
* Webpack is used to bundle the components.
* I couldn't integrate Vuex so the ID of the user is a a prop in most of the components. The parent component is <App>

**To consider**

The ID of a user is given from server side and storage in `userId` in the App component.
If the user is neither register nor logged the userId should be 0. Which is by default.

./resources/js/components/App.vue
``` 
name: 'App',
  data: () => ({ userId: 0 })
```
