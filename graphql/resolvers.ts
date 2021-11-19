import { advancementModel } from "../models/advance";
import { InscriptionModel } from "../models/inscription";
import { UserModel } from "../models/user";

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

    Avances: async (parent,args) =>{
      const avances = await advancementModel.find().populate('proyecto').populate('creadoPor');
      return avances;
    }
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

    crearAvance: async (parent, args) => {
      const avance = await advancementModel.create({
        fecha: args.fecha,
        descripcion: args.descripcion,
        creadPor: args.creadPor,
        proyecto: args.proyecto,
      });
      return avance;
    }
  },
};
