import { Schema, model } from "mongoose";
import { Enum_EstadoProyecto, Enum_FaseProyecto, Enum_TipoObjetivo } from "../enums";
import { UserModel } from "../User/user";
import { InscriptionModel } from "../Inscripciones/inscription";

interface Project {
  nombre: string;
  presupuesto: number;
  fechaInicio: Date;
  fechaFin: Date;
  estado: Enum_EstadoProyecto;
  fase: Enum_FaseProyecto;
  objetivo: [{ descripcion: String; tipo: Enum_TipoObjetivo }];
  inscripciones: Schema.Types.ObjectId;
  avances: Schema.Types.ObjectId;
  lider: Schema.Types.ObjectId;
}

const ProjectSchema = new Schema<Project>({
  nombre: {
    type: String,
  },
  presupuesto:{
    type: Number,
  },
  lider:{
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
  objetivo: [
        {
            descripcion:{
                type:String,
                required:true,
            },
            tipo: {
                type:String,
                enum: Enum_TipoObjetivo,
                required:true,
            },
        },
    ],
},
{
  toJSON: { virtuals: true }, // So `res.json()` and other `JSON.stringify()` functions include virtuals
  toObject: { virtuals: true }, // So `console.log()` and other functions that use `toObject()` include virtuals
}
);

ProjectSchema.virtual('avances', {
  ref: 'Avance',
  localField: '_id',
  foreignField: 'proyecto',
});

ProjectSchema.virtual('inscripciones', {
  ref: 'Inscripcion',
  localField: '_id',
  foreignField: 'proyecto',
});

export const ProjectModel = model("Proyecto", ProjectSchema);