import {ProjectModel} from './projects'
 

const projectResolvers ={

    Query:{ Proyectos: async (parents, args)=>{
        const proyectos = await ProjectModel.find().populate('lider');
        return proyectos;

    },
    },
    Mutation:{
        createdProject: async(parents,args)=>{
            const projectCreated = await ProjectModel.create({
                nombre: args.nombre,
                estado: args.estado,
                fase: args.fase,
                fechaInicio: args.fechaInicio,
                fechaFin: args.fechaFin,
                presupuesto: args.presupuesto,
                lider: args.lider,
                objetives: args.objetivos,

            });
            return projectCreated;
        },
    },
};

export { projectResolvers };

