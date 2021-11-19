import { Schema, model } from "mongoose";
import { UserModel } from "../user";

interface Advance {
  fecha: Date;
  descripcion: string;
  observaciones: [string];
  proyecto: Schema.Types.ObjectId;
  creadPor: Schema.Types.ObjectId;
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
  creadPor: {
    type: Schema.Types.ObjectId,
    ref: UserModel,
    required: true,
  },
});

const advancementModel = model('Avance', advancementSchema)

export {advancementModel};