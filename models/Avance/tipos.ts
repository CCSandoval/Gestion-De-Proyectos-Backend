import { gql } from "apollo-server-express";

const tiposAvance = gql`
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
      avancesPorProyecto(_id: String!): [Avance]
  }

  type Mutation{
    crearAvance(
    fecha: Date!
    descripcion: String!
    proyecto: String!
    creadPor: String!
      ): Avance
    
    editarAvance(
      _id: String!
      descripcion: String
    ):Avance

    nuevaObservacion(
      _id:String!
      observacion: String
    ): Avance
  }
`;

export {tiposAvance}
