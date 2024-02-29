import express from "express";
import { ApolloServer } from "apollo-server-express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

const port = process.env.PORT || 3303;

app.listen(port, () => {
    console.log(`
🚀 SERVER HAS LAUNCH ON PORT :: ${port}
        `);
});
