import { Schema, model } from "mongoose";
import { Enum_TipoObjetivo } from "../Enums/enums";
import { ProjectModel } from "../Proyecto/Proyecto";

interface Objective {
  descripcion: string;
  tipo: Enum_TipoObjetivo;
  proyecto: Schema.Types.ObjectId;
}

const ObjectiveSchema = new Schema<Objective>({
  descripcion: {
    type: String,
    required: true,
  },
  tipo: {
    type: String,
    enum: Enum_TipoObjetivo,
    required: true,
  },
  proyecto: {
    type: Schema.Types.ObjectId,
    ref: ProjectModel,
    requiered: true,
  },
});

export const ObjectiveModel = model("objetivo", ObjectiveSchema);
