import { Autor } from "../Entities/Autor";
import { Biblioteca } from "../Entities/Biblioteca";
import { LibroImpreso } from "../Entities/LibroImpreso";

const matias = new Autor("Matias","Hidalgo")

const pedro = new Autor("Pedro","Fernandez")

const libro1 = new LibroImpreso("Colores",matias)

const libro2 = new LibroImpreso("Magia oscura",pedro)

const biblioteca = new Biblioteca()


biblioteca.agregarLibro(libro1)

biblioteca.agregarLibro(libro2)

biblioteca.mostrarCatalogo()