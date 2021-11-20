import { gql } from "apollo-server-express";

const tiposIncription = gql`

enum Enum_InscriptionState {
    ACEPTADA
    RECHAZADA
    PENDIENTE
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

export {tiposIncription}