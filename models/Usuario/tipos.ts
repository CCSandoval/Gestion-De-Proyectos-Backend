import { gql } from "apollo-server-express";

export const tiposUsuario = gql`
  type Usuario {
    _id: ID!
    correo: String!
    identificacion: String!
    password: String!
    nombres: String!
    apellidos: String!
    estado: Enum_UserState
    rol: Enum_UserRol!
    avances: [Avance]
    inscripciones: [Inscripcion]
  }
  type Query {
    Usuarios: [Usuario]
  }
  type Mutation {
    aceptarUsuario(_id: String!): Usuario
    rechazarUsuario(_id: String!): Usuario
  }
`;
