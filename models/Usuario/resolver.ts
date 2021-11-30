import { Enum_UserState } from "../Enums/enums";
import { UserModel } from "./Usuario";

export const resolversUsuario = {
  Query: {
    Usuarios: async (parent, args) => {
      const usuarios = await UserModel.find()
        .populate("avances")
        .populate("inscripciones");
      return usuarios;
    },
  },
  Mutation: {
    aceptarUsuario: async (parent, args) => {
      const usuario = await UserModel.findByIdAndUpdate(
        args._id,
        {
          estado: Enum_UserState.AUTORIZADO,
        },
        { new: true }
      );
      return usuario;
    },
    rechazarUsuario: async (parent, args) => {
      const usuario = await UserModel.findByIdAndUpdate(
        args._id,
        {
          estado: Enum_UserState.RECHAZADO,
        },
        { new: true }
      );
      return usuario;
    },
  },
};
