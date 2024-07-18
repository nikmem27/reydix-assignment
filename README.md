# Fastify API with Prisma and PostgreSQL

This repository contains a Fastify API and uses Prisma models for a PostgreSQL database.

## Prerequisites

- [Docker](https://www.docker.com/get-started)

## Getting Started

### 1. Unzip the Project

Unzip the downloaded project file to your desired directory.

```sh
cd reydix-assignment
```

### 2. Run Docker Compose
   On your terminal, on the correct directory, start the services using Docker Compose:

```sh
docker compose up
```

### 3. Run Database Migrations
Once Docker Compose has completed setting up the containers, run the following command to apply the database migrations:

```sh
npm run docker:db:migrate
```

### 4. Start the Server
Your server is now ready to listen on requests. The default address is: 
#### https://0.0.0.0:5000

### API Documentation
You can read the swagger.yaml file for detailed API documentation.
