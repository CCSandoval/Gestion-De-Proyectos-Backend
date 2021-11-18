import { UserModel } from "../models/user";

export const resolvers = {
  Query: {
    Usuarios: async (parent, args) => {
      const usuarios = await UserModel.find();
      return usuarios;
    },
  },
};
