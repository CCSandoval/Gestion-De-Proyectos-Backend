import { gql } from "apollo-server-express";

export const tiposAuth = gql`
  type Token {
    token: String
    error: String
  }

  type Mutation {
    registro(
      correo: String!
      identificacion: String!
      password: String!
      nombres: String!
      apellidos: String!
      estado: Enum_UserState
      rol: Enum_UserRol
    ): Token!

    login(correo: String!, password: String!): Token!

    #No recibe el token como argumento porque se usa el contexto
    refreshToken: Token
  }
`;
