import {Enum_EstadoProyecto, Enum_FaseProyecto} from "../Enums/enums";
import { ProjectModel } from "./Proyecto";
import { InscriptionModel } from "../Inscripcion/Inscripcion"
import {ObjectiveModel} from '../Objetivo/Objetivo'
import {Enum_TipoObjetivo} from '../Enums/enums'

const resolverProyecto = {
    Query: {
        Proyectos: async (parent, args) => {
            const proyectos = await ProjectModel.find()
            .populate('lider')
            .populate('avances')
            .populate('objetivos')
            .populate('inscripciones')
            .populate('usuarios')
            .populate({path:"inscripciones", populate:{path:"estudiante", populate:{path:"nombres apellidos identificacion correo"}}})
            .populate({path:"avances", populate:{path:"creadoPor", populate:{path:"nombres apellidos identificacion correo"}}})
            return proyectos;
        },
        Proyecto: async (parent, args) => {
            console.log(args);
            const proyecto = ProjectModel.findById(args._id)
            .populate('lider')
            .populate('avances')
            .populate('objetivos')
            .populate('inscripciones')
            .populate('usuarios')
            .populate({path:"inscripciones", populate:{path:"estudiante", populate:{path:"nombres apellidos identificacion correo"}}})
            .populate({path:"avances", populate:{path:"creadoPor", populate:{path:"nombres apellidos identificacion correo"}}});
            return proyecto;
        },
        proyectosLider: async (parent, args) => {
            const proyectoFiltrado = await ProjectModel.find({ lider: args._id })
            .populate('lider')
            .populate('avances')
            .populate('objetivos')
            .populate('inscripciones')
            .populate('usuarios')
            .populate({path:"inscripciones", populate:{path:"estudiante", populate:{path:"nombres apellidos identificacion correo"}}})
            .populate({path:"avances", populate:{path:"creadoPor", populate:{path:"nombres apellidos identificacion correo"}}})
            return proyectoFiltrado;
        },
        proyectosPorUsuario: async(parent,args) => {
            const proyectos = await ProjectModel.find()
            let proyectosReturn = []
            proyectos.map((proyecto)=>{
                proyecto.usuarios.map((usuario)=>{
                    if(usuario.toString() === args._id){
                        proyectosReturn.push(proyecto.populate('lider objetivos'))
                    }
                })
            })
            return proyectosReturn
        },
        InscripcionesPorProyecto: async (parent, args) => {
            const inscripcionesP = await ProjectModel.findById(
              args.proyecto
            ).populate('inscripcion');
            return inscripcionesP;
          },
    },
    Mutation: {
        crearProyecto: async (parent, args) => {
            const proyecto = await ProjectModel.create({
                nombre: args.nombre,
                presupuesto: args.presupuesto,
                lider: args.lider,
            });

            args.especificos.map(async (obj)=>{
                await ObjectiveModel.create({
                    tipo: Enum_TipoObjetivo.ESPECIFICO,
                    proyecto: proyecto._id,
                    descripcion: obj,
                })
            })
            args.generales.map(async (obj)=>{
                await ObjectiveModel.create({
                    tipo: Enum_TipoObjetivo.ESPECIFICO,
                    proyecto: proyecto._id,
                    descripcion: obj,
                })
            })

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
        desactivarProyecto: async (parent, args) =>{
           const proyectoDesactivado = await ProjectModel.findByIdAndUpdate(
                args._id,{
                    estado: Enum_EstadoProyecto.INACTIVO,
                },
                {new: true}
            );
            InscriptionModel.updateMany(
                {
                proyecto: args._id,
                },
                {
                $set:{
                    fechaEgreso: new Date(Date.now()),
                    }
                    
                },
                {new: true}
            );
            return proyectoDesactivado;
        },
        terminarProyecto: async (parent, args) =>{
            const proyectoTerminado = await ProjectModel.findByIdAndUpdate(
                 args._id,{
                     fase: Enum_FaseProyecto.TERMINADO,
                     estado: Enum_EstadoProyecto.INACTIVO,
                 },
                 {new: true}
             );
             InscriptionModel.updateMany(
                 {
                 proyecto: args._id,
                 },
                 {
                 $set:{
                     fechaEgreso: new Date(Date.now()),
                     }
                 },
                 {new: true}
             );
             return proyectoTerminado;
         },
    },
};

export {resolverProyecto};



