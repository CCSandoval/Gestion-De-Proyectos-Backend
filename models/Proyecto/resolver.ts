import {Enum_EstadoProyecto} from "../Enums/enums";
import { ProjectModel } from "./Proyecto";
import { InscriptionModel } from "../Inscripcion/Inscripcion"

export const resolverProyecto = {
    Query: {
        Proyectos: async (parent, args) => {
            const proyectos = await ProjectModel.find()
            .populate('lider')
            .populate('avances')
            .populate('objetivos')
            .populate('inscripcion');
            return proyectos;
        },
        filtrarProyecto: async (parent, args) => {
            const proyectoFiltrado = await ProjectModel.find({ lider: args._id })
            .populate('lider')
            .populate('avances')
            .populate('objetivos')
            .populate('inscripcion');
            return proyectoFiltrado;
        },
    },
    Mutation: {
        crearProyecto: async (parent, args) => {
            const proyecto = await ProjectModel.create({
                nombre: args.nombre,
                presupuesto: args.presupuesto,
                lider: args.lider,
                fechaInicio: args.fechaInicio,
                estado: args.estado,
                fase: args.fase,
                objetivo: args.objetivo,
                avance: args.avance,
                inscripcion: args.inscripcion,
            });
            return proyecto;
        },
        editarProyecto: async (parent,args) =>{
            const proyectoEditado = await ProjectModel.findByIdAndUpdate(
                args._id,
                {
                    nombre: args.nombre,
                    presupuesto: args.presupuesto,
                },
                {new:true}
            );
            return proyectoEditado;
        },
        activarProyecto: async (parent, args) => {
            const proyectoActivado = await ProjectModel.findByIdAndUpdate(
                args._id,{
                    estado: Enum_EstadoProyecto.ACTIVO,
                    fechaInicio: new Date(Date.now()),

                },
                {new: true}
            );
            return proyectoActivado;
        },
        /*desactivarProyecto: async (parent, args) =>{
           const proyectoDesactivado = await ProjectModel.findByIdAndUpdate(
                args._id,{
                    estado: Enum_EstadoProyecto.INACTIVO,
                },
            InscriptionModel.updateMany(
                {args._id},{},update);
            );
            return proyectoDesactivado;
        },*/
    },
};



