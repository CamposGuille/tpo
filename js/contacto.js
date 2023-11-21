// const formulario = document.getElementsByName('form')[0];   //[0] Primer elemento, el formulario en si mismo.
const formulario = document.getElementById('form');   //[0] Primer elemento, el formulario en si mismo. const elementos = formulario.elements;                          // Elementos del form, no lo usamos en este script.
const boton = document.getElementById('b1');    // El botón
const nameInput = document.getElementById('nombre');
const phoneInput = document.getElementById('celular');
const emailInput = document.getElementById('email');
const comentInput = document.getElementById('comentarios');

// aca voy a guardar los usuarios ingresados por el input
// let user = [];

// esto es para levantar los usuarios guardados en el local storage

const users = JSON.parse(localStorage.getItem('users')) || [];

// Función para guardar los usuarios en el localStorage

const saveToLocalStorage = () => {
    localStorage.setItem('users', JSON.stringify(users));
};


// --------------------------------------------------------
// Validamos Nombre
// --------------------------------------------------------
const validarNombre = (e) => {
    if (formulario.nombre.value == 0) {      // El campo no tiene que estar vacio
        alert("Completa el campo nombre");
        return false;
    }

    if (formulario.nombre.value.length <= 4) {      // El campo id="nombre" debe tener al minimo 4 caracteres
        alert("El campo 'nombre' debe tener al minimo 4 caracteres");
        return false;
    }
    return true;
};

// --------------------------------------------------------
// Validamos Phone
// --------------------------------------------------------

const validarPhone = (e) => {
    if (formulario.celular.value == 0) {      // El campo no tiene que estar vacio
        alert("Completa el campo Nro.Celular");
        return false;
    }

    if (!isValidPhone(formulario.celular)) {
        alert("El celular no es válido!");
        return false;
    }
    return true;
   
}

// Función para validar el celu con expresión regular

const isValidPhone = (input) => {
    const re = /^[0-9]{10}$/;
    return re.test(input.value.trim())
}

// --------------------------------------------------------
// Validamos Email
// --------------------------------------------------------

const validarEmail = (e) => {
    if (formulario.email.value == 0) {      // El campo no tiene que estar vacio
        alert("Completa el campo de Email");
        return false;
    }

    if (!isValidEmail(formulario.email)) {
        alert("El Email no es válido!");
        return false;
    }
    return true;

}

// Función para validar el Email con expresión regular

const isValidEmail = (input) => {
    const re = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/ // esto es una expresión regular
    return re.test(input.value.trim())  // a esta expresión input.value.trim(), la mando a testear x la expresion regular
}

// --------------------------------------------------------
// Validamos Comentarios
// --------------------------------------------------------
const validarComentarios = (e) => {
    if (formulario.comentarios.value.length >= 0 && formulario.comentarios.value.length < 15) {      // El campo id="nombre" debe tener al minimo 15 caracteres
        alert("El campo 'Comentarios' no debe estar vacio y tener al minimo 15 caracteres");
        return false;
    }
    return true;

};

// --------------------------------------------------------
// Se ejecuta al presionar submit e invoca a las 4 validaciones
// --------------------------------------------------------
const validar = (e) => {  // "e" es el evento recibido del form (https://developer.mozilla.org/es/docs/Web/API/Event/preventDefault)
    e.preventDefault();                 // Evita elcomportamiento por defecto - https://www.w3schools.com/jsref/event_preventdefault.asp    if (formulario.nombre.value == 0) {      // Si el campo id="nombre" del form está vacio...
    let isNameValid = validarNombre(e);
    let isPhoneValid = validarPhone(e);
    let isEmailValid = validarEmail(e);
    let isComentValid = validarComentarios(e);

    let isValidForm = isNameValid && isPhoneValid && isEmailValid && isComentValid

    if (isValidForm) {
        users.push({
            name: nameInput.value,
            phone: phoneInput.value,
            email: emailInput.value,
            coment: comentInput.value
        })
    
        // esto seria para guardarlo en el local storage!
        saveToLocalStorage(users);               
        alert("El Mensaje fue enviado con éxito!");
    
        // despues del envio lo redireccionamos al Home!
        window.location.href = "index.html";
    // } else {
        // window.location.href = "contacto.html";
    }
};


const init = () =>{
    formulario.addEventListener("submit", validar);
    // registerForm.addEventListener("submit", validateForm)
    // nameInput.addEventListener("input",()=> checkTextInput(nameInput))
    // lastNameInput.addEventListener("input",()=> checkTextInput(lastNameInput))
    // emailInput.addEventListener("input",()=> checkEmail(emailInput))
    // passInput.addEventListener("input",()=> checkPassword(passInput))
    // phoneInput.addEventListener("input",()=> checkPhone(phoneInput))
}

init()
