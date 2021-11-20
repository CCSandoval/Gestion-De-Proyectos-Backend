
 import { gql } from "apollo-server-express";

 const tiposUsuarios = gql`
 
 enum Enum_UserState {
    AUTORIZADO
    NO_AUTORIZADO
    PENDIENTE
  }

enum Enum_UserRol {
    LIDER
    ADMINISTRADOR
    ESTUDIANTE
}

 type Usuario {
    _id: ID!
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

 export {tiposUsuarios}
