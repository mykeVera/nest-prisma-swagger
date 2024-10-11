*** NEST JS + PRISMA (Postgress) + SWAGGER ***

## 1. Install new project Nest JS

```bash
nest new nestjs-prisma-swagger
```

### To create Resources (examples)

```bash
# create new moduless
$ nest generate module ['name']

# create new controllers
$ nest generate controller ['name']

# create new services
$ nest generate service ['name']

# create new resource (module, controller, service, dto, entity)
$ nest generate resource ['name']

# create new pipes
$ nest generate pipe ['route directory']

# create new guards
$ nest generate guard ['route directory']

# create new middlewares
$ nest generate middleware ['route directory']
```
Note: use "--no-spec" to not create test files

## 2. Install Validator Pipe

```bash
npm i --save class-validator class-transformer
```

## 3. Install Prisma ORM (default with Postgresql)

```bash
# install prisma
npm install prisma --save-dev

# initial prisma with files and .env
npx prisma init

# execute files migration
npx prisma migrate dev --name ['name']
```

## 4. Install Swagger (API Documentation)

```bash
npm install --save @nestjs/swagger
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

### Tutorial origin

Origin: 
https://www.youtube.com/watch?v=wsqcg5ZtUMM&ab_channel=FaztCode

Summary:
07:24:00    Instalación
13:38:00    Estructura de proyecto
19:43:00    Service-Module-Controller
21:14:00    Modules NestJS
34:49:00    Services
50:40:00    Response
01:11:19    Validaciones
01:20:11    Http status error
01:22:46    Pipes
01:31:39    Guards
01:36:35    Middlewares
01:44:53    Resources
01:48:05    Database
01:56:30    Swagger
02:00:55    Cors
02:04:06    Deploy with Railway