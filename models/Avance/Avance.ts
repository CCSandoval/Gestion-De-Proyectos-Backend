import { Schema, model } from "mongoose";
import { UserModel } from "../Usuario/Usuario";

interface Advance {
  fecha: Date;
  descripcion: string;
  observaciones: [string];
  proyecto: Schema.Types.ObjectId;
  creadoPor: Schema.Types.ObjectId;
}

const advancementSchema = new Schema<Advance>({
  fecha: {
    type: Date,
    required: true,
  },
  descripcion: {
    type: String,
    required: true,
  },
  observaciones: [
    {
      type: String,
    },
  ],
  proyecto: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  creadoPor: {
    type: Schema.Types.ObjectId,
    ref: UserModel,
    required: true,
  },
});

const advancementModel = model("Avance", advancementSchema);

export { advancementModel };
