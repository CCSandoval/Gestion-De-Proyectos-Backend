import { gql } from 'apollo-server-express';
import { tiposAvance } from '../models/Avance/tipos';
import { tiposUsuarios } from '../models/User/tipos';
import { tiposIncription } from '../models/Inscripciones/tipos';
import { tiposProyectos } from '../models/Proyecto/tipos';

export const tiposGlobales = gql`
  scalar Date
`;

export const types = [tiposGlobales, tiposAvance, tiposUsuarios, tiposIncription, tiposProyectos]