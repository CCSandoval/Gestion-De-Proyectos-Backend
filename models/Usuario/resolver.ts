import { Enum_UserState } from "../Enums/enums";
import { UserModel } from "./Usuario";
import bcrypt from "bcrypt";
import { ProjectModel } from "../Proyecto/Proyecto";

export const resolversUsuario = {
  Query: {
    Usuarios: async (parent, args) => {
      const usuarios = await UserModel.find();
      return usuarios;
    },
    Usuario: async (parent, args) => {
      const usuario = await UserModel.findOne({ _id: args._id });
      return usuario;
    },
    UsuariosPorProyecto: async (parent, args) => {
      const usuariosProyecto = await ProjectModel.findById(args._id).populate(
        "usuarios"
      );
      return usuariosProyecto.usuarios;
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
    editarUsuario: async (parent,args) =>{
      const salt = await bcrypt.genSalt(10);
      //Genera la contraseña encriptada
      const hashedPass = await bcrypt.hash(args.password, salt);

      const usuarioEditado = await UserModel.findByIdAndUpdate(
          args._id,
          {
              nombres: args.nombres,
              correo: args.correo,
              identificacion: args.identificacion,
              password: hashedPass,
          },
          {new:true}
      );
      return usuarioEditado;
  },


  },

};
