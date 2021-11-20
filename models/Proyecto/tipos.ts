import { gql } from "apollo-server-express";

const tiposProyectos = gql`

enum Enum_EstadoProyecto {
    ACTIVO
    INACTIVO
  }

enum Enum_FaseProyecto {
    DESARROLLO
    INICIADO
    TERMINADO
    NULL
  }

  enum Enum_TipoObjetivo {
    ESPECIFICO
    GENERAL
  }

type Objetivo {
    _id: ID!
    descripcion: String!
    tipo: Enum_TipoObjetivo!
  }

input crearObjetivo {
    descripcion: String!
    tipo: Enum_TipoObjetivo!
  }

type Proyecto{
    _id: ID!
    nombre: String!
    presupuesto: Float!
    fechaInicio: Date!
    fechaFin: Date!
    estado: Enum_EstadoProyecto!
    fase: Enum_FaseProyecto!
    objetivo: [Objetivo]
    avances: [Avance]
    inscripciones: [Inscripcion]
    lider: Usuario!
}

type Query {
    Proyectos: [Proyecto]
}

type Mutation {
    crearProyecto(
    nombre: String!
    presupuesto: Float!
    fechaInicio: Date!
    fechaFin: Date!
    estado: Enum_EstadoProyecto!
    fase: Enum_FaseProyecto!
    lider: String!
    objetivos: [crearObjetivo]
    ): Proyecto
  }

`;

export {tiposProyectos}
