import { Schema, model } from "mongoose";
import { Enum_UserRol, Enum_UserState } from "./enums";

interface User {
  correo: string;
  identificacion: string;
  nombre: string;
  apellido: string;
  rol: Enum_UserRol;
  estado: Enum_UserState;
}

const userSchema = new Schema<User>({
  correo: {
    type: String,
    required: true,
  },
  identificacion: {
    type: String,
    required: true,
    unique: true,
  },
  nombre: {
    type: String,
    required: true,
  },
  apellido: {
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
});

const UserModel = model("User", userSchema);

export { UserModel };
