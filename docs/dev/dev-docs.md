# Dev docs

Here are docs for those would like to contribute to Penny or want explanations to what is happening behind the scenes.

## Database schema

Below is the database schema that the Penny backend is based on. The database was meant to be quite lean so that data could be transferred quite fast to the user. Also, third-party APIs were more heavily used.

![Schema](database_schema.png)

I used [Dbdiagram](dbdiagram.io) to create the schema.

## Facebook API (auth0)

The [Facebook integration via auth0](https://auth0.com/) provides functionality through its Oauth platform. More features can be built later as well, for example the ability to integrate with more social profiles.

## Technology stack

- Typescript
- Javascript
- NextJS (React)
- Node/Express
- Jest
- Axios
- Sequelize (PostgreSQL)

### Environmental variables

In both the frontend and the backend, you will find a starter .env file. Insert your own values and get brewing :)
