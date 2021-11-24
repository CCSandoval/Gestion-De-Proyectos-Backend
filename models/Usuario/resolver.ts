import { UserModel } from "./Usuario";

export const resolversUsuario = {
  Query: {
    Usuarios: async (parent, args) => {
      const usuarios = await UserModel.find();
      return usuarios;
    },
  },
};
