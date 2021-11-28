import { ObjectiveModel } from "./Objetivo";

export const resolverObjetivos = {
  Mutation: {
    crearObjetivo: async (parent, args) => {
      const objetivo = await ObjectiveModel.create({
        descripcion: args.descripcion,
        tipo: args.tipo,
        proyecto: args.proyecto,
      });
      return objetivo.populate("proyecto");
    },
    editarObjetivo: async (parent, args) =>{
      const objetivoEditado = await ObjectiveModel.findByIdAndUpdate(args._id,{
        descripcion: args.descripcion,
        tipo: args.tipo,
      },{
        new: true
      })
      return objetivoEditado;
    },
  },
};
