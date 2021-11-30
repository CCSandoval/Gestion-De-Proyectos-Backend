import { resolverAvance } from "../models/Avance/resolver";
import { resolversInscripcion } from "../models/Inscripcion/resolver";
import { resolversUsuario } from "../models/Usuario/resolver";
import { resolverObjetivos } from "../models/Objetivo/resolver";
import { resolversAuth } from "./auth/resolver";
export const resolvers = [
  resolverAvance,
  resolversInscripcion,
  resolversUsuario,
  resolverObjetivos,
  resolversAuth,
];
