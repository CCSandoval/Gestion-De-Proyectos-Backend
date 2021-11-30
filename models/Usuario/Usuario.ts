import { Schema, model } from "mongoose";
import { Enum_UserRol, Enum_UserState } from "../Enums/enums";

interface User {
  correo: string;
  password: string;
  identificacion: string;
  nombres: string;
  apellidos: string;
  rol: Enum_UserRol;
  estado: Enum_UserState;
  avances: [Schema.Types.ObjectId];
  inscripciones: [Schema.Types.ObjectId];
}

const userSchema = new Schema<User>(
  {
    correo: {
      type: String,
      unique: true, //PARA NO REPETIR CORREOS
      required: true,
      validate: {
        validator: (correo) => {
          return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(correo);
        },
        message: "Please enter a valid email",
      }, //VALIDAR EL FORMATO DEL CORREO
    },
    identificacion: {
      type: String,
      required: true,
      unique: true,
    },
    nombres: {
      type: String,
      required: true,
    },
    apellidos: {
      type: String,
      required: true,
    },
    rol: {
      type: String,
      required: true,
      enum: Enum_UserRol,
    },
    estado: {
      type: String,
      enum: Enum_UserState,
      default: Enum_UserState.PENDIENTE,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

userSchema.virtual("avances", {
  ref: "avance",
  localField: "_id",
  foreignField: "creadoPor",
}); //PARA POPULAR LOS AVANCES

userSchema.virtual("inscripciones", {
  ref: "inscripcion",
  localField: "_id",
  foreignField: "estudiante",
}); //PARA POPULAR LAS INSCRIPCIONES

const UserModel = model("User", userSchema);

export { UserModel };
