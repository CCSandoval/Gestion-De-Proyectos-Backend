enum Enum_UserRol {
  LIDER = "LIDER",
  ADMINISTRADOR = "ADMINISTRADOR",
  ESTUDIANTE = "ESTUDIANTE",
}

enum Enum_UserState {
  AUTORIZADO = "AUTORIZADO",
  NO_AUTORIZADO = "NO AUTORIZADO",
  PENDIENTE = "PENDIENTE",
}

enum Enum_InscriptionState {
  ACEPTADA = "ACEPTADA",
  RECHAZADA = "RECHAZADA",
  PENDIENTE = "PENDIENTE",
}

enum Enum_EstadoProject{
  ACTIVO = "ACTIVO",
  INACTIVO = "INACTIVO",
}

enum Enum_TipoObjective{
  ESPECIFICO = "ESPECIFICO",
  GENERAL = "GENERAL",
}

enum Enum_FaseProject{
  DESARROLLO = "DESARROLLO",
  INICIADO = "INICIADO",
  TERMINADO = "TERMINADO",
  NULL = "NULL",
}

export { Enum_UserRol, Enum_UserState, Enum_InscriptionState, Enum_EstadoProject, Enum_TipoObjective, Enum_FaseProject };
