import { gql } from "apollo-server-express";

export const tiposProyecto = gql`
  type Proyecto {
    nombre: String!
    presupuesto: Float!
    fechaInicio: Date
    fechaFin: Date
    estado: Enum_EstadoProyecto
    fase: Enum_FaseProyecto
    objetivos: String
    avances: [Avance]
    inscripcion: [Inscripcion]
  }
`;
