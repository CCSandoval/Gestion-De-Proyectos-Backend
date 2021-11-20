import { resolverInscripcion } from "../models/Inscripciones/resolvers";
import { resolverAvance } from "../models/Avance/resolver";
import { resolverUser } from "../models/User/resolvers";


export const resolvers =[resolverAvance, resolverUser, resolverInscripcion]
