import { advancementModel } from "./Avance";

const resolverAvance = {
  Query: {
    Avances: async (parent, args) => {
      const avances = await advancementModel
        .find()
        .populate("proyecto")
        .populate("creadoPor");
      return avances;
    },
    avancesPorProyecto: async (parent, args) => {
      const avancesFiltrados = await advancementModel
        .find({
          proyecto: args._id,
        })
        .populate("proyecto")
        .populate("creadoPor");

      return avancesFiltrados;
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
    editarAvance: async (parent, args) => {
      const avanceEditado = await advancementModel
        .findByIdAndUpdate(
          args._id,
          {
            descripcion: args.descripcion,
          },
          { new: true }
        )
        .populate("proyecto")
        .populate("creadoPor");
      return avanceEditado;
    },
    nuevaObservacion: async (parent, args) => {
      const avance = await advancementModel.findById(args._id);
      const avanceConObservacion = await advancementModel.findByIdAndUpdate(
        args._id,
        {
          observaciones: [...avance.observaciones, args.observacion],
        },
        { new: true }
      );
      return avanceConObservacion;
    },
  },
};

export { resolverAvance };
