import { connect } from "mongoose";

const conectarBD = async () => {
    return await connect(
        ''
    )
      .then(() => {
        console.log('Conexion exitosa');
      })
      .catch((e) => {
        console.error('Error conectando a la bd', e);
      });
  };
  
  export default conectarBD;