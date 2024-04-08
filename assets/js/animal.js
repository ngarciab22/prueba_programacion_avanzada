// Definición de la clase Animal
export class Animal {
    // Constructor de la clase Animal que recibe los parámetros nombre, edad, img, comentarios y sonido
    constructor(nombre, edad, img, comentarios, sonido) {
        this._nombre = nombre;
        this._edad = edad;
        this._img = img;
        this._comentarios = comentarios;
        this._sonido = sonido;
    }

    // Getter para obtener el nombre del animal
    get nombre() {
        return this._nombre;
    }

    // Getter para obtener la edad del animal
    get edad() {
        return this._edad;
    }

    // Getter para obtener la imagen del animal
    get img() {
        return this._img;
    }

    // Getter para obtener los comentarios del animal
    get comentarios() {
        return this._comentarios;
    }

    // Setter para establecer los comentarios del animal
    set comentarios(comentarios) {
        this._comentarios = comentarios;
    }

    // Getter para obtener el sonido del animal
    get sonido() {
        return this._sonido;
    }
}
