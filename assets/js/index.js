// Importación de las clases de animales
import { Leon } from "./leon.js";
import { Lobo } from "./lobo.js";
import { Oso } from "./oso.js";
import { Serpiente } from "./serpiente.js";
import { Aguila } from "./aguila.js";

// Función para instanciar objetos de animales
const instanciarAnimales = (nombre, edad, img, comentarios, sonido) => {
    switch (nombre) {

        case 'Leon': return new Leon(nombre, edad, img, comentarios, sonido);
        case 'Lobo': return new Lobo(nombre, edad, img, comentarios, sonido);
        case 'Oso': return new Oso(nombre, edad, img, comentarios, sonido);
        case 'Serpiente': return new Serpiente(nombre, edad, img, comentarios, sonido);
        case 'Aguila': return new Aguila(nombre, edad, img, comentarios, sonido);
        default: alert('Animal no encontrado'); // Alerta si el animal no está definido
    }
};

// Función para obtener los datos de los animales desde un archivo JSON
const data = (() => {
    const obtenerData = async () => {
        const response = await fetch("./animales.json");
        const { animales } = await response.json();
        return animales;
    };
    return obtenerData();
})();

// Elementos del DOM
const imgPreview = document.getElementById('preview');
const opcionAnimal = document.getElementById('animal');
const btnAgregar = document.getElementById('btnRegistrar');
const animalesDiv = document.getElementById('Animales');
const edad = document.getElementById('edad');
const comentarios = document.getElementById('comentarios');

// Función para actualizar la vista previa de la imagen del animal seleccionado
opcionAnimal.addEventListener('change', async () => {
    const animales = await data;
    const animalSeleccionado = animales.find(animal => animal.name === opcionAnimal.value);
    if (animalSeleccionado) {
        imgPreview.style.backgroundImage = `url(./assets/imgs/${animalSeleccionado.imagen})`;
    }
    else {
        alert('Animal no encontrado'); // Alerta si el animal no está definido en los datos
    }
});

// Función para validar que se han completado todos los campos del formulario
const validarDatos = () => {
    if (opcionAnimal.value === '' || edad.value === '' || comentarios.value === '') {
        alert('Debe rellenar todos los datos solicitados.'); 
        return false; // Devuelve false si faltan dato
    }
    else {
        alert('Animal registrado correctamente.'); 
        return true;
    }
}

// Función para restablecer el formulario a su estado inicial
const resetFormulario = () => {
    opcionAnimal.value = 'Seleccione un animal';
    edad.value = 'Seleccione un rango de años';
    comentarios.value = '';
    imgPreview.style.backgroundImage = '';
};

// Lista que almacena los animales registrados
const cardAnimales = [];

// Evento click para el botón "Registrar"
btnAgregar.addEventListener('click', async () => {
    if (validarDatos()) { 
        const animales = await data;
        const animalSeleccionado = animales.find(animal => animal.name === opcionAnimal.value);

        if (animalSeleccionado) {
            // Se crea una nueva instancia de la clase Animal
            const nuevaInstancia = instanciarAnimales(animalSeleccionado.name, edad.value, animalSeleccionado.imagen, comentarios.value, animalSeleccionado.sonido);
            cardAnimales.push(nuevaInstancia);
            animalesDiv.innerHTML = ''; // Se limpia el contenedor de animales en el DOM
            // Se actualiza la vista con la lista de animales registrados
            cardAnimales.forEach(animal => {
                animalesDiv.innerHTML +=
                    `<div class="col-3">
                         <div class="mb-3 ">
                            <img class="w-100" src="./assets/imgs/${animal._img}">
                            <button onclick="playSound('${animal._nombre}')" class="btn btn-secondary w-100">
                                <img class="w-25" src="assets/imgs/audio.svg">
                            </button>
                        </div>
                    </div>`;
            });
            resetFormulario(); // Se restablece el formulario a su estado inicial
        }
    }
});

// Función global para reproducir el sonido del animal
window.playSound = (nombre) => {
    const animal = cardAnimales.find(animal => animal._nombre === nombre);

    if (animal) {
        animal.emitirSonido(); // Se reproduce el sonido del animal
    }
};



