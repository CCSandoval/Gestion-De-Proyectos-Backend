import { gql } from 'apollo-server-express';
import { tiposAvance } from '../models/Avance/tipos';

export const types = gql`
  scalar Date

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

  enum Enum_InscriptionState {
    ACEPTADA
    RECHAZADA
    PENDIENTE
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

  type Inscripcion {
    _id: ID!
    fechaInscripcion: Date
    fechaIngreso: Date
    fechaEgreso: Date
    estado: Enum_InscriptionState
    proyecto: String
    estudiante: Usuario!
  }

  type Query {
    Usuarios: [Usuario]
    Inscripciones: [Inscripcion]
  }

  type Mutation {
    crearInscripcion(
      fechaIngreso: Date
      fechaEgreso: Date
      estado: Enum_InscriptionState
      proyecto: String
      estudiante: String!
    ): Inscripcion
  }
`;

export const tipos = [tiposAvance]