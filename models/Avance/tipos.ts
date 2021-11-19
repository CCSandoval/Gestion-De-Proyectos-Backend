import { gql } from "apollo-server-express";

const tiposAvance = gql`
scalar Date

type Avance{
    _id: ID!
    fecha: Date;
    descripcion: String;
    observaciones: [String];
    proyecto: Proyecto;
    creadPor: Usuario!;
  }

  type Query{
      Avances:[Avance]
  }

  type mutation{
    crearAvance(
    fecha: Date!
    descripcion: String!
    proyecto: String!
    creadPor: String!
      )
  }
`;

export {tiposAvance}
