import {gql} from 'apollo-server-express';

const projectTypes = gql`

    scalar Date

    type Project{
        _id: ID!,
        nombre: String!,
        presupuesto: float!,
        fechaInicio: Date!,
        fechaFin: Date!,
        estado: Enum_EstadoProject!,
        objetivo: Enum_TipoObjective!,
        fase: Enum_FaseProject!,
        lider: Usuario!
    }

    type Query{
        Projects: [Project]
    }

    type Mutation{
        createProject(
        nombre: String!,
        presupuesto: float!,
        fechaInicio: Date!,
        fechaFin: Date!,
        estado: Enum_EstadoProject!,
        objetivo: Enum_TipoObjective!,
        fase: Enum_FaseProjec!,
        lider: String!
        )
    }



`;

export {projectTypes};

