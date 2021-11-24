import { gql } from "apollo-server-express";

export const tiposEnums = gql`
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

  enum Enum_EstadoProyecto {
    ACTIVO
    INACTIVO
  }

  enum Enum_TipoObjetivo {
    ESPECIFICO
    GENERAL
  }

  enum Enum_FaseProyecto {
    DESARROLLO
    INICIADO
    TERMINADO
    NULL
  }
`;
