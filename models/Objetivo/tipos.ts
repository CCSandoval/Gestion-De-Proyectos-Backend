import { gql } from "apollo-server-express";

export const tiposObjetivos = gql`
  type Objetivo {
    descripcion: String!
    tipo: Enum_TipoObjetivo!
    proyecto: String! #TODO: cambiar este campo a Proyecto
  }

  type Mutation {
    crearObjetivo(
      descripcion: String!
      tipo: Enum_TipoObjetivo!
      proyecto: String!
    ): Objetivo
  }
`;
