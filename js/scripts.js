// querySelector
const heading = document.querySelector('.header__texto h2') // 0 o 1 Elementos
// heading.textContent = 'Nuevo Heading';
console.log(heading);

//querySelectorAll
const enlaces = document.querySelectorAll('.navegacion a');
console.log(enlaces[0]);
enlaces[0].textContent = 'Ustedes';
enlaces[0].href = 'http://google.com';
enlaces[0].classList.add('nueva-clase');
enlaces[0].classList.remove('navegcion__enlace');


//getElementById
const heading_dos = document.getElementById('heading');
console.log(heading_dos);

//Generar un nuevo enlace
const nuevoEnlace = document.createElement('A');
//agregar el href
nuevoEnlace.href = 'nuevo-enlace.html';
//agregar el texto
nuevoEnlace.textContent = 'Un nuevo enlace';
//agreagr la clase
nuevoEnlace.classList.add('navegacion__enlace');
//agregarlo en el documento
const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace);

console.log(nuevoEnlace);

//Eventos
// console.log(1);
// window.addEventListener('load', function(){ // load espera a que el JS y los archivos que dependen del HTML estén listos.
//     console.log(2);
// })

// window.onload = function() {
//     console.log(3);
// }

// document.addEventListener('DOMContentLoaded', function(){ //Solo espera por el HTMl, pero no espera CSS o imagenes.
//     console.log(4);
// })

// console.log(5);

// window.onscroll =function() {
//     console.log('scrolling...');
// }

//Seleccionar elementos y asociarles un evento.
// const btnEnviar = document.querySelector('.boton--primario')
// btnEnviar.addEventListener('click', function(e) {
//     console.log(e);
//     e.preventDefault(); //para todos los formularios.
//     //Validar un formulario

//     console.log('Enviando formulario');
// })

//Eventos de los Inputs y Textarea
const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');

nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);
formulario.addEventListener('submit', function(e) { //El evento de Submit
    e.preventDefault();
    //Validar el formulario
    const { nombre, email, mensaje } = datos; //distrocturing
    
    if(nombre === '' || email === '' || mensaje === '') {
        // console.log('Todos los campos son obligatorios');
        mostrarAlerta('Todos los campos son obligatorios', 'error')
        return; //Corta la ejecución del código
    }
    //Enviar el formulario
    // console.log('Enviando datos');
    mostrarAlerta('Mensaje enviado correctamente')
})

function leerTexto(e) {
    // console.log(e.target.value);
    datos[e.target.id] = e.target.value;
    // console.log(datos);
}

//refactoring codigo, refactorizado.
function mostrarAlerta(mensaje, error = null) {
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;

    if(error) {
        alerta.classList.add('error');
    } else {
        alerta.classList.add('correcto');
    }
    formulario.appendChild(alerta);

    //Desaparezca después de 5 seg
    setTimeout(() => {
        alerta.remove();
    }, 5000);
}

//Muestra un error en pantalla
// function mostrarError(mensaje) {
    // console.log(mensaje);
    // const error = document.createElement('P');
    // error.textContent = mensaje;
    // error.classList.add('error');
    // formulario.appendChild(error);

    //Desaparezca después de 5 seg
//     setTimeout(() => {
//         error.remove();
//     }, 5000);
// }

//Muestra correcto en pantalla
// function mCorrecto(mensaje) {
    // console.log(mensaje);
    // const correcto = document.createElement('P');
    // correcto.textContent = mensaje;
    // correcto.classList.add('correcto');
    // formulario.appendChild(correcto);

    //Desaparezca después de 5 seg
//     setTimeout(() => {
//         correcto.remove();
//     }, 5000);
// }
