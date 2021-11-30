import { UserModel } from "../../models/Usuario/Usuario";
import { generateToken } from "../../utils/tokenUtils";
import bcrypt from "bcrypt";

export const resolversAuth = {
  Mutation: {
    registro: async (parent, args) => {
      //Busca si existen usuarios con el correo o identificacion ingresados
      const correoExiste = await UserModel.findOne({ correo: args.correo });
      const idExiste = await UserModel.findOne({
        identificacion: args.identificacion,
      });

      //Existe un usuario con el correo o identificacion ingresados?
      if (correoExiste || idExiste) {
        //Retorna error
        return {
          error: "Correo o id existen",
        };
      }

      //Crea 10 rondas de salteo para la contraseña
      const salt = await bcrypt.genSalt(10);
      //Genera la contraseña encriptada
      const hashedPass = await bcrypt.hash(args.password, salt);
      //Crea el usuario con la contraseña encriptada
      const usuario = await UserModel.create({
        correo: args.correo,
        password: hashedPass,
        nombres: args.nombres,
        apellidos: args.apellidos,
        identificacion: args.identificacion,
        rol: args.rol,
      });
      //Retorna un token con los datos del usuario creado
      return {
        token: generateToken({
          _id: usuario._id,
          nombres: usuario.nombres,
          apellidos: usuario.apellidos,
          identificacion: usuario.identificacion,
          correo: usuario.correo,
          rol: usuario.rol,
          estado: usuario.estado,
        }),
      };
    },
    login: async (parent, args) => {
      //Busca el usuario al que pertenezca el correo ingresado
      const usuario = await UserModel.findOne({ correo: args.correo });
      //No existe el usuario?
      if (!usuario) {
        //Retorna error
        return { error: "Usuario no encontrado" };
      }

      //Verifica si las contraseñas son iguales usando la función compare de bcrypt
      if (await bcrypt.compare(args.password, usuario.password)) {
        //Retorna un token con la información del usuario
        return {
          token: generateToken({
            _id: usuario._id,
            nombres: usuario.nombres,
            apellidos: usuario.apellidos,
            identificacion: usuario.identificacion,
            correo: usuario.correo,
            rol: usuario.rol,
            estado: usuario.estado,
          }),
        };
      }
    },
    refreshToken: async (parent, args, context) => {
      //No recibió ninguna información de usuario válida?
      if (!context.userData) {
        //Retorna error
        return { error: "Token invalido" };
      }
      //Si recibió información de usuario válida entonces retorna un token nuevo con los datos recibidos
      return {
        token: generateToken({
          _id: context.userData._id,
          nombres: context.userData.nombres,
          apellidos: context.userData.apellidos,
          identificacion: context.userData.identificacion,
          correo: context.userData.correo,
          rol: context.userData.rol,
          estado: context.userData.estado,
        }),
      };
    },
  },
};
