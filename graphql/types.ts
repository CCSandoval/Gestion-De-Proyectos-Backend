import { gql } from "apollo-server-express";

export const types = gql`
  enum Enum_UserRol {
    LIDER
    ADMINISTRADOR
    ESTUDIANTE
  }
  enum Enum_UserState {
    AUTORIZADO
    NO_AUTORIZADO
    PENDIENTE
  }

  type Usuario {
    correo: String!
    identificacion: String!
    nombre: String!
    apellido: String!
    rol: Enum_UserRol!
    estado: Enum_UserState
  }
  type Query{
      Usuarios: [Usuario]
  }
`;
