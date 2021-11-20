import {gql} from 'apollo-server-express';

const projectTypes = gql`

    scalar Date

    type Project{
        _id: ID!
        nombre: String!
        presupuesto: Float!
        fechaInicio: Date!
        fechaFin: Date!
        estado: Enum_EstadoProject!
        objetivo: Enum_TipoObjective!
        fase: Enum_FaseProject!
       
    }

    type Query{
        Proyectos: [Project]
    }

    type Mutation{
        createdProject(
        nombre: String!
        presupuesto: Float!
        fechaInicio: Date!
        fechaFin: Date!
        estado: Enum_EstadoProject!
        objetivo: Enum_TipoObjective!
        fase: Enum_FaseProject!
        lider: String!
        ):Project
    }
`;

export { projectTypes };

