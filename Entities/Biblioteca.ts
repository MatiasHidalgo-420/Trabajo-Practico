import { Libro } from "./Libro";

export class Biblioteca {

   private libros: Libro[] = []

   agregarLibro(libro: Libro): Libro{
    this.libros.push(libro)
    console.log(`Libro agregado a la biblioteca: ${libro.obtenerResumen()}`)
    return libro
   }

   mostrarCatalogo(){
    console.log("Catalogo de biblioteca")
    this.libros.forEach((libro, index) => {
        console.log(libro.obtenerResumen())
    })
    return this.libros
   }
}