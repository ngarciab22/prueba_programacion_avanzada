// Importa la clase Animal desde el archivo animal.js
import { Animal } from "./animal.js";

// Obtiene el elemento de audio del DOM
let audio = document.getElementById("player");

// Definición de la clase hija que extiende de la clase Animal
export class Aguila extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido);
    }

    // Método chillar() para que se reproduzca su sonido
    chillar() {
        audio.src = `./assets/sounds/${this._sonido}`;
        audio.play();
    }

    // Método emitirSonido() para emitir el sonido
    emitirSonido() {
        this.chillar();
    }
}