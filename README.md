# Getting Started

## Initialize DB
To initialize the database, you will need to request an API Key from the [Pathfinder2 API](https://api.pathfinder2.fr). After this, create a `.env` file, and use your API Key for the envvar `SRD_API_KEY`.

To initialize and seed the database, run `yarn run reset-db`

## Auth
Currently, the only supported login method is Discord. Request a key from the Discord, and set the envvars `DISCORD_CLIENT_ID` and `DISCORD_CLIENT_SECRET` in a newly-created `.env.local` file.
