import { gql } from "apollo-server-express";
import { tiposAvance } from "../models/Avance/tipos";
import { tiposUsuario } from "../models/Usuario/tipos";
import { tiposInscripcion } from "../models/Inscripcion/tipos";
import { tiposEnums } from "../models/Enums/tipos";
import { tiposProyecto } from "../models/Proyecto/tipos";

const tiposGlobales = gql`
  scalar Date
`;

export const tipos = [
  tiposGlobales,
  tiposAvance,
  tiposUsuario,
  tiposInscripcion,
  tiposEnums,
  tiposProyecto,
];
