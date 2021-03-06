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
    Usuario(_id: String!): Usuario
    UsuariosPorProyecto(_id: String!) : [Usuario]
  }
  type Mutation {
    aceptarUsuario(_id: String!): Usuario
    rechazarUsuario(_id: String!): Usuario
  }
  type Mutation {
    aceptarUsuario(_id: String!): Usuario
    rechazarUsuario(_id: String!): Usuario

    editarUsuario(
      _id: String!
      nombres: String!
      correo: String!
      identificacion: String!
      password:String!
      ): Usuario

  }
`;
