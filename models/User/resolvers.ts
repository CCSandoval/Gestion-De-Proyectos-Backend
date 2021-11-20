import { UserModel } from "./user";

const resolverUser ={
    Query: {
        Usuarios: async (parent, args) => {
            const usuarios = await UserModel.find();
            return usuarios;
          },
    },

    // Mutation: {

    // }
}

export {resolverUser}