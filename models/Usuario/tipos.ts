import { gql } from "apollo-server-express";

export const tiposUsuario = gql`
  type Usuario {
    _id: ID!
    correo: String!
    identificacion: String!
    nombre: String!
    apellido: String!
    rol: Enum_UserRol!
    estado: Enum_UserState
  }
  type Query {
    Usuarios: [Usuario]
  }
`;
