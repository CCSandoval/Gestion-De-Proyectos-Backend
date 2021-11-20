import { gql } from "apollo-server-express";

const enumTypes = gql`
  scalar Date

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

  enum Enum_EstadoProject{
    ACTIVO
    INACTIVO
  }
  enum Enum_TipoObjective{
    GENERAL
    ESPECIFICO
  }
  enum Enum_FaseProject{
    INICIADO
    DESARROLLO
    TERMINADO
    NULO
  }


`;

export {enumTypes};