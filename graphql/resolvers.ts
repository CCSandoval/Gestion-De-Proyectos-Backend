import { advancementModel } from "../models/Avance/Avance";
import { InscriptionModel } from "../models/Inscripcion/Inscripcion";
import { UserModel } from "../models/Usuario/Usuario";
import { resolverAvance } from "../models/Avance/resolver";

export const resolvers = {
  Query: {
    Usuarios: async (parent, args) => {
      const usuarios = await UserModel.find();
      return usuarios;
    },
    Inscripciones: async (parent, args) => {
      const inscripciones = await InscriptionModel.find().populate(
        "estudiante"
      );
      return inscripciones;
    },
  },
  Mutation: {
    crearInscripcion: async (parent, args) => {
      const inscripcion = await InscriptionModel.create({
        fechaIngreso: args.fechaIngreso,
        fechaEgreso: args.fechaEgreso,
        estado: args.estado,
        proyecto: args.proyecto,
        estudiante: args.estudiante,
      });
      return inscripcion;
    },
  },
};

export const resolver = [resolverAvance];
