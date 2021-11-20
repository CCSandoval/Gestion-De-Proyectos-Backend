import { InscriptionModel } from "./inscription";

const resolverInscripcion = {
  Query: {
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

export {resolverInscripcion}
