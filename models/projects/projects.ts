import { Schema, model } from "mongoose";
import {Enum_EstadoProject, Enum_FaseProject, Enum_TipoObjective} from '../enums/enums';
import {UserModel} from '../user';


interface Project {
    nombre: string;
    presupuesto: number;
    fechaInicio: Date;
    fechaFin: Date;
    estado: Enum_EstadoProject;
    objetivo: Enum_TipoObjective;
    fase: Enum_FaseProject
    lider: Schema.Types.ObjectId;
}

const projectSchema = new Schema<Project>({

    nombre: {
        type: String,
        require: true,
    },
    presupuesto: {
        type: Number,
        require: true,
    },
    fechaInicio:{
        type: Date,
        require: true,
    },
    fechaFin:{
        type:Date,
        require: false,
    },
    estado:{
        type: String,
        enum: Enum_EstadoProject,
        default: Enum_EstadoProject.INACTIVO,
    },
    objetivo:{
        type: String,
        enum: Enum_TipoObjective,
        require: true,
    },
    fase:{
        type:String,
        enum:Enum_FaseProject,
    },
    lider:{
        type:Schema.Types.ObjectId,
        require: true,
        ref: UserModel,
    }
}

)
const ProjectModel = model('Proyecto', projectSchema);

export {ProjectModel};






