import { Enum_InscriptionState } from "../Enums/enums";
import { ProjectModel } from "../Proyecto/Proyecto";
import { InscriptionModel } from "./Inscripcion";

export const resolversInscripcion = {
  Query: {
    Inscripciones: async (parent, args) => {
      const inscripciones = await InscriptionModel.find().populate(
        "estudiante proyecto"
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
    aceptarInscripcion: async (parent, args) => {
      const inscripcionAprobada = await InscriptionModel.findByIdAndUpdate(
        args.id,
        {
          estado: Enum_InscriptionState.ACEPTADA,
          fechaIngreso: new Date(Date.now()),
        },
        { new: true }
      );
      return inscripcionAprobada;
    },

    rechazarInscripcion: async (parent, args) => {
      const inscripcionRechazada = await InscriptionModel.findByIdAndUpdate(
        args.id,
        {
          estado: Enum_InscriptionState.RECHAZADA,
          fechaIngreso: new Date(Date.now()),
          fechaEgreso: new Date(Date.now()),
        },
        { new: true }
      );
      return inscripcionRechazada;
    },
  },
};
