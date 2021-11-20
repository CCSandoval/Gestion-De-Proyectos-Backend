import { gql } from "apollo-server-express";

const tiposAvance = gql`
scalar Date

type Avance{
    _id: ID!
    fecha: Date!
    descripcion: String!
    observaciones: [String]
    proyecto: Proyecto!
    creadPor: Usuario!
  }

  type Query{
      Avances:[Avance]
  }

  type Mutation{
    crearAvance(
    fecha: Date!
    descripcion: String!
    proyecto: String!
    creadoPor: String!
      ): Avance
  }
`;

export {tiposAvance}
