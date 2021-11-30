enum Enum_UserRol {
  LIDER = "LIDER",
  ADMINISTRADOR = "ADMINISTRADOR",
  ESTUDIANTE = "ESTUDIANTE",
}

enum Enum_UserState {
  AUTORIZADO = "AUTORIZADO",
  RECHAZADO = "RECHAZADO",
  PENDIENTE = "PENDIENTE",
}

enum Enum_InscriptionState {
  ACEPTADA = "ACEPTADA",
  RECHAZADA = "RECHAZADA",
  PENDIENTE = "PENDIENTE",
}

enum Enum_EstadoProyecto{
  ACTIVO = "ACTIVO",
  INACTIVO = "INACTIVO",
}

enum Enum_TipoObjetivo{
  ESPECIFICO = "ESPECIFICO",
  GENERAL = "GENERAL",
}

enum Enum_FaseProyecto{
  DESARROLLO = "DESARROLLO",
  INICIADO = "INICIADO",
  TERMINADO = "TERMINADO",
  NULL = "NULL",
}
export { Enum_UserRol, Enum_UserState, Enum_InscriptionState, Enum_EstadoProyecto, Enum_TipoObjetivo, Enum_FaseProyecto };
