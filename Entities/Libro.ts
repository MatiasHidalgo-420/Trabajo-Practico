import { Autor } from "../Entities/Autor";

export interface Libro{
    titulo: string;
    autor: Autor;
    obtenerResumen(): string;
}

