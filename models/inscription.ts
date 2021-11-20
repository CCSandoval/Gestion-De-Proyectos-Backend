import { Schema, model } from "mongoose";
import { Enum_InscriptionState } from "./enums";
import { ProjectModel } from "./projects";
import { UserModel } from "./user";

interface Inscription {
  fechaInscripcion: Date;
  fechaIngreso: Date;
  fechaEgreso: Date;
  estado: Enum_InscriptionState;
  proyecto: Schema.Types.ObjectId;
  estudiante: Schema.Types.ObjectId;
}

const InscriptionSchema = new Schema<Inscription>({
  fechaInscripcion: {
    type: Date,
    default: new Date(Date.now()),
  },
  fechaIngreso: {
    type: Date,
  },
  fechaEgreso: {
    type: Date,
  },
  estado: {
    type: String,
    enum: Enum_InscriptionState,
    default: Enum_InscriptionState.PENDIENTE,
  },
  proyecto: {
    type: Schema.Types.ObjectId,
    ref: ProjectModel,
    requiered: true,
  },
  estudiante: {
    type: Schema.Types.ObjectId,
    ref: UserModel,
    required: true,
  },
});

export const InscriptionModel = model("inscription", InscriptionSchema);
