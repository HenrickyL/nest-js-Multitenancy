# Multitenancy NestJS

Esquenta DevFullCicle

## commands:

### Create project
* `npm i -g @nestjs/cli`
* `nest new nestjs-multitenancy`
### Create Module
* `nest g module auth`
### Create Controller
* `nest g controller auth/users`
### Create Service
* `nest g service auth/users`
### Add Prisma
* `npx prisma init`
### Use Docker
```yaml
services:
  db:
    image: mysql:8.0.30-debian
    environment:
      - MYSQL_ROOT_PASSWORD=root
      - MYSQL_DATABASE=nest
    ports:
      - 3306:3306
```
### Run Docker
* `docker compose up`
### Prisma migrate
* `npx prisma migrate dev`
### Service Prisma connection
* `nest g service prisma`
### Add Prisma Client
* `npm i @prisma/client`