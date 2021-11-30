import express from "express";
import cors from "cors";
import { ApolloServer } from "apollo-server-express";
import dotenv from "dotenv";
import conectarBD from "./db/db";
import { tipos } from "./graphql/types";
import { resolvers } from "./graphql/resolvers";
import { validateToken } from "./utils/tokenUtils";

dotenv.config({ path: "./.env" });

//Esta función recibe el token, lo valida y devuelve los datos del usario
const getUserData = (token) => {
  const verification = validateToken(token.split(" ")[1]);
  if (verification.data) {
    return verification.data;
  } else {
    return null;
  }
};

const server = new ApolloServer({
  typeDefs: tipos,
  resolvers: resolvers,
  //En el contexto quedará guardada la información del usuario que hace la petición
  //Todas las peticiones que se hacen desde el front tendrán este contexto
  context: ({ req }) => {
    const token = req.headers?.authorization ?? null; //Hay token? Asignarlo a token, sino, asignar null
    if (token) {
      //Es valido el token?
      const userData = getUserData(token);
      if (userData) {
        //Si la información del usuario es válida la retorna
        return { userData };
      }
    } else {
      //Si no hay token devuelve null
      return null;
    }
  },
});

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
