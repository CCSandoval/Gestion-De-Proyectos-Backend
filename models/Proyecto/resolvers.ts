import { ProjectModel } from "./projects";

const resolverProyecto = {
  Query: {
    Proyectos: async (parent, args) => {
      const proyectos = await ProjectModel.find()
        .populate("lider")
        .populate("avances");
      return proyectos;
    },
  },
  Mutation: {
    crearProyecto: async (parent, args) => {
      const nuevoProyecto = await ProjectModel.create({
        nombre: args.nombre,
        fechaInicio: args.fechaInicio,
        fechaFin: args.fechaFin,
        fase: args.fase,
        estado: args.estado,
        presupuesto: args.presupuesto,
        lider: args.lider,
        objetivos: args.objetivos,
      });
      return nuevoProyecto;
    },
  },
};

export { resolverProyecto };
