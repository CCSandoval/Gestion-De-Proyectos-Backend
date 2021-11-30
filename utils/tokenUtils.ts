import jwt from "jsonwebtoken";

//Esta función genera un token válido durante 24 horas, recibe como parametro payload que es la información del usuario
export const generateToken = (payload) => {
  return jwt.sign(payload, "secreto123DeveApp's", {
    expiresIn: "24h",
  });
};
//Esta función valida el token que recibe como parametro, si es válido retorna los datos que contiene, sino retorna un error
export const validateToken = (token) => {
  if (token) {
    const verification = jwt.verify(
      token,
      "secreto123DeveApp's",
      (err, data) => {
        if (data) return { data: data };
        if (err) return { error: err };
      }
    );
    return verification;
  }
};
