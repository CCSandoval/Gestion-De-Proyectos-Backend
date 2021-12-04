import { Enum_InscriptionState } from "../Enums/enums";
import { InscriptionModel } from "./Inscripcion";
import { ProjectModel } from "../Proyecto/Proyecto";
export const resolversInscripcion = {
  Query: {
    Inscripciones: async (parent, args) => {
      const inscripciones = await InscriptionModel.find()
        .populate("estudiante")
        .populate("proyecto")
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
      return inscripcion.populate("proyecto estudiante");
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
      const proyecto = await ProjectModel.findById(
        inscripcionAprobada.proyecto
      );
      const estudiantes = proyecto.usuarios;
      const proyectoConUsuario = await ProjectModel.findByIdAndUpdate(
        inscripcionAprobada.proyecto,
        {
          usuarios: [...estudiantes, inscripcionAprobada.estudiante],
        }
      );
      return inscripcionAprobada.populate("estudiante proyecto");
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
      )
        .populate("proyecto")
        .populate("estudiante");
      return inscripcionRechazada;
    },
  },
};
