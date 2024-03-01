import express from "express";
import { ApolloServer } from "apollo-server-express";

import dotenv from "dotenv";

import typeDefs from "./schemas/schema.js";
import resolvers from "./resolvers/resolvers.js";

dotenv.config();

const app = express();

const port = process.env.PORT || 3303;

(async () => {
    const server = new ApolloServer({ typeDefs, resolvers });

    await server.start();
    server.applyMiddleware({ app });

    app.listen(port, () => {
        console.log(`
    🚀 SERVER HAS LAUNCH ON PORT :: ${port}
        `);
    });
})();
