import express from "express";
import { ApolloServer } from "apollo-server-express";
import colors from "colors";
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
        console.log(
            colors.yellow(`
    🚀 SERVER HAS LAUNCH ON PORT :: ${port}
    📈 GRAPHQL IS READY TO USE ON :: http://localhost:${port}/graphql
        `)
        );
    });
})();
