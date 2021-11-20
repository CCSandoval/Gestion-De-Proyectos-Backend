import { advancementModel } from "./advance";

const resolverAvance = {
  Query: {
    Avances: async (parent, args) => {
      const avances = await advancementModel
        .find()
        .populate("proyecto")
        .populate("creadoPor");
      return avances;
    },
  },
  Mutation: {
    crearAvance: async (parent, args) => {
      const avance = await advancementModel.create({
        fecha: args.fecha,
        descripcion: args.descripcion,
        creadoPor: args.creadoPor,
        proyecto: args.proyecto,
      });
      return avance;
    },
  },
};

export { resolverAvance };
