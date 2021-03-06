# gp-ts-epresss-typeorm-mysql
## Application Overview
This project has Express backend with TypeORM framework for database. This runs on NodeJS platform.

### Backend

#### Technologies

- **Environment:** NodeJS
- **Framework:** Express
- **Language:** Typescript
- **ORM:** TypeORM
- **Database:** MySQL
- **Testing:** Jest & Supertest (Reserved for future)

##### Steps

commands to run the application

################################
Clone the repo

npm install

The `build` script from the server root will trigger `tsc` which will compile the source into the `dist/` folder. 
This location is specified in the `tsconfig.json` file via the `outDir` key.

node dist/app.js

################################

Server comes online on 3000 port by default

### Frontend

#### Technologies

- **Library:** React (built from Create-React-App)
- **State:** Redux (configured via Redux Toolkit)
- **Routing:** React-Router-Dom
- **Styling:** bootstrap
- **http** axios