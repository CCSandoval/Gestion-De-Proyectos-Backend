import express from "express";
import cors from "cors";
import { ApolloServer } from "apollo-server-express";
import dotenv from "dotenv";
import conectarBD from "./db/db";
import { tipos } from "./graphql/types";
import { resolvers } from "./graphql/resolvers";

dotenv.config({ path: "./.env" });

const server = new ApolloServer({ typeDefs: tipos, resolvers: resolvers });

const app = express();

app.use(express.json());
app.use(cors());

app.listen({ port: process.env.PORT || 5001 }, async () => {
  await conectarBD();
  await server
    .start()
    .then(() => {
      console.log(`🚀 Servidor iniciado en: ${process.env.PORT || 5001}`);
    })
    .catch((e) => console.log(`🆘 Error iniciando el servidor: ${e}`));
  server.applyMiddleware({ app });
});
