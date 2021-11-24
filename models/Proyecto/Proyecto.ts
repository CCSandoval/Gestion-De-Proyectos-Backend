import { Schema, model } from "mongoose";
import {
  Enum_EstadoProyecto,
  Enum_FaseProyecto,
  Enum_TipoObjetivo,
} from "../Enums/enums";
import { UserModel } from "../Usuario/Usuario";
import { InscriptionModel } from "../Inscripcion/Inscripcion";

interface Project {
  nombre: string;
  presupuesto: number;
  fechaInicio: Date;
  fechaFin: Date;
  estado: Enum_EstadoProyecto;
  fase: Enum_FaseProyecto;
  objetivos: [Schema.Types.ObjectId];
  inscripciones: [Schema.Types.ObjectId];
  avances: [Schema.Types.ObjectId];
  lider: Schema.Types.ObjectId;
}

const ProjectSchema = new Schema<Project>({
  nombre: {
    type: String,
  },
  presupuesto: {
    type: Number,
  },
  lider: {
    type: Schema.Types.ObjectId,
    ref: UserModel,
    required: true,
  },
  fechaInicio: {
    type: Date,
  },
  fechaFin: {
    type: Date,
  },
  estado: {
    type: String,
    enum: Enum_EstadoProyecto,
    default: Enum_EstadoProyecto.INACTIVO,
  },
  fase: {
    type: String,
    enum: Enum_FaseProyecto,
    default: Enum_FaseProyecto.NULL,
  },
}, {
  toJSON: { virtuals: true }, 
  toObject: { virtuals: true },
});

ProjectSchema.virtual("avances",{
  ref:"Avance",
  localField: "_id",
  foreignField:"proyecto"
})

ProjectSchema.virtual("inscripciones",{
  ref:"inscription",
  localField: "_id",
  foreignField:"proyecto"
})

ProjectSchema.virtual("objetivos",{
  ref:"objetivo",
  localField: "_id",
  foreignField: "proyecto"
})

export const ProjectModel = model("Proyecto", ProjectSchema);
