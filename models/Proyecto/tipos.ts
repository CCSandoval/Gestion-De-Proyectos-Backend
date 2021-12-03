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
    lider: Usuario
    objetivos: [Objetivo]
    avances: [Avance]
    inscripciones: [Inscripcion]
    usuarios: [Usuario]
  }

  type Query{
    Proyectos: [Proyecto]
    proyectoFiltrado(_idLider: String!) : [Proyecto]
    UsuariosPorProyecto(_id: String!) : [Proyecto]
  }

  type Mutation{
    crearProyecto(
      nombre: String!
      presupuesto: Float!
      lider: String!
    ): Proyecto

    editarProyecto(
      _id: String!
      nombre: String!
      presupuesto: Float!
    ): Proyecto

    activarProyecto(
      _id:String!
      ):Proyecto
  
  terminarProyecto(
    _id:String!
    ):Proyecto
  
  desactivarProyecto(
    _id:String!
    ):Proyecto
  }
`;

