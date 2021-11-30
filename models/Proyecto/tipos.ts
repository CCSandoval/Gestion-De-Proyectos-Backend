import { gql } from "apollo-server-express";

export const tiposProyecto = gql`
  type Proyecto {
    _id:ID!
    nombre: String!
    presupuesto: Float!
    fechaInicio: Date
    fechaFin: Date
    estado: Enum_EstadoProyecto
    fase: Enum_FaseProyecto
    lider:[Usuario]
    objetivos: [Objetivo]
    avances: [Avance]
    inscripcion: [Inscripcion]
  }

  type Query{
    Proyectos: [Proyecto]
    proyectoFiltrado(_idLider: String!) : [Proyecto]
  }

  type Mutation{
    crearProyecto(
      nombre: String!
      presupuesto: Float!
      lider: String!
      fechaInicio: Date
      fechaFin:Date
      estado: Enum_EstadoProyecto
      fase:Enum_FaseProyecto
      objetivo: String!
      Inscripcion:String!
      Avance:String!
    ): Proyecto

    editarProyecto(
      _id: String!
      nombre: String!
      presupuesto: Float!
    ): Proyecto

    activarProyecto(_id:String!):Proyecto
  }


`;
