import conectarBD from "./db/db"
import { Enum_Rol } from "./models/enums";
import { UserModel } from "./models/user";

const main = async() =>{
    await conectarBD();

    // CREAR UN USUARIO
  await UserModel.create({
    apellido: 'Sandoval',
    correo: 'krcamilo0417@gmail.com',
    identificacion: '1115448153',
    nombre: 'Cristian',
    rol: Enum_Rol.administrador,
  })
    .then((u) => {
      console.log('usuario creado', u);
    })
    .catch((e) => {
      console.error('Error creando el usuario', e);
    });

  // OBTENER LOS USUARIOS
  // await UserModel.find()
  //   .then((u) => {
  //     console.log('usuarios', u);
  //   })
  //   .catch((e) => {
  //     console.error('error obteniendo los usuarios', e);
  //   });
};

main();